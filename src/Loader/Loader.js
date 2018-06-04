import React from 'react';
import Icon from '@folio/stripes-components/lib/Icon';
import css from './Loader.css';

class CatalogingLoader extends React.Component {
  render() {
    const iconType = 'spinner-ellipsis';
    const size = '35px';
    return (
      <div className={css.contentLoadingRow}>
        <div className={css.contentLoading}>
          <Icon icon={iconType} width={size} />
        </div>
      </div>
    );
  }
}

export default CatalogingLoader;
