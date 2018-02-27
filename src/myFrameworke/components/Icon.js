require('../styles/icon.scss');
import React, { PropTypes } from 'react';
import omit from '../commentJs/omit';
import classNames from '../commentJs/classNames';

const Icon = (props) => {
  const { type, spin, className, children } = props;
  const action = spin ? `action-${type}` : '';
  const classString = classNames({
    props: className,
    type,
    action
  }, 'icon');
  return (
    <i {...omit(props, ['type','spin'])} className={classString}>
      {children}
    </i>
  )
}
Icon.PropTypes = {
  type: PropTypes.string,
  spin: PropTypes.boolean,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element
}

export default Icon;
