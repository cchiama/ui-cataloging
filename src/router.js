import React from 'react';
import PropTypes from 'prop-types';
import { Route as ApplicationRoute } from 'react-router-dom';

export { Switch, Redirect } from 'react-router-dom';

export function Route({ component: Component, children, ...props }) {
  /* istanbul ignore else */
  if (Component) {
    return (
      <ApplicationRoute {...props} render={props => (<Component {...props}>{children}</Component>)} /> // eslint-disable-line no-shadow
    );
  } else {
    return (<ApplicationRoute {...props}>{children}</ApplicationRoute>);
  }
}

Route.propTypes = {
  component: PropTypes.func,
  children: PropTypes.node
};
