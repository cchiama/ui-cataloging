import PropTypes from 'prop-types';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import Settings from './Settings';
import Cataloging from './App/Cataloging';
import { Route as ApplicationRoute } from './router';
import { TemplateView } from './Template/';

class CatalogingRouting extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      intl: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired,
    showSettings: PropTypes.bool,
  };

  render() {
    let { showSettings, match: { path: rootPath } } = this.props;
    return showSettings ? (
      <Settings {...this.props} />
    ) : (
      <ApplicationRoute path={rootPath} component={Cataloging}>
        <Switch>
          <Route path={`${rootPath}/cataloging/templateList`} component={TemplateView} />
          <Route render={() => (<Redirect to={`${rootPath}`} />)} />
        </Switch>
      </ApplicationRoute>
    );
  }
}


export default CatalogingRouting;
