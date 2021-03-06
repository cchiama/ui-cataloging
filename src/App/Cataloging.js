import PropTypes from 'prop-types'; // eslint-disable-line no-unused-vars
import React from 'react';
import { connect } from '@folio/stripes-connect';
import { Navigator } from '../Navigator';
import * as C from '../Utils/';
import VersionModalApp from '../Modal/VersionModal';

class Cataloging extends React.Component<PropTypes> {
  static propTypes = {
    stripes: PropTypes.shape({
      intl: PropTypes.object.isRequired,
      locale: PropTypes.string.isRequired,
      connect: PropTypes.func,
      showToaster: PropTypes.bool,
      store: PropTypes.object,
    }).isRequired,
    resources: PropTypes.shape({ // eslint-disable-line no-unused-vars
    }).isRequired,
    mutator: PropTypes.shape({ // eslint-disable-line no-unused-vars
      initializedFilterConfig: PropTypes.shape({
        replace: PropTypes.func.isRequired,
      }),
      records: PropTypes.shape({
        POST: PropTypes.func.isRequired,
      }),
    }).isRequired,
    showToaster: PropTypes.bool
  };

  static manifest = Object.freeze({
    query: { initialValue: {} },
  });


  render() {
    return (
      <div>
        <Navigator {...this.props} />
        <VersionModalApp />
      </div>
    );
  }
}

export default connect(Cataloging, C.META.MODULE_NAME);
