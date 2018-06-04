import React from 'react';
import Icon from '@folio/stripes-components/lib/Icon';
import css from './Loader.css';

class CatalogingLoader extends React.Component {
  static propTypes = {
    iconType: PropTypes.oneOf(Object.keys(icons)),
    iconSize: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
    color: PropTypes.string,
    width: PropTypes.number,
    className: PropTypes.string
  }

  render() {
    const { icon, iconSize, color, className,width } = this.props;
    const style = color ? { fill: color } : {};
    const iconType = icon ? icon :  'spinner-ellipsis';
    const size = width ? width: '35px';
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
