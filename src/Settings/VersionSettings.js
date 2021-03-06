import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '@folio/stripes-connect';
import { VersionModal } from './';
import * as C from '../Utils';

class Version extends React.Component {

  static propTypes = {
    appTitle: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  }
  render() {
    return (
      <VersionModal appTitle="Cataloging" version="1.0-beta" />
    );
  }
}
export default connect(Version, C.META.MODULE_NAME);
