import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Settings } from './Settings';
import Cataloging from './App/Cataloging';

type RoutingProps = {|
  stripes: {
  connect: Function,
    intl: Object
},
history: {
  goBack: Function,
    pop: Function,
      push: Function
},
match: {
  path: string,
    id: string
},
location: {
  pathname: string
},
showSettings: bool;
|}

class CatalogingRouting extends React.Component<RoutingProps, {}> {

  constructor(props) {
    super(props);
    this.connectedApp = props.stripes.connect(Cataloging);
  }

  render() {
    let {
      showSettings
    } = this.props;
    if (showSettings) {
      return <Settings {...this.props} />;
    }
    return (
      <Switch>
        <Route
          path={`${this.props.match.path}`}
          render={() => <this.connectedApp {...this.props} />}
        />
      </Switch>
    );
  }
}

export default CatalogingRouting;
