require('../styles/button.scss');
import React, { PropTypes } from 'react';
import classNames from '../commentJs/classNames';
import omit from '../commentJs/omit';

const Button = (props) => {
  const { type, loading, className, children } = props;
  const classString = classNames({
    props: className,
    type
  }, 'bt');
  return (
    <div {...omit(props, ['type','loading'])} className={classString}>
      <button>
        {children}
      </button>
    </div>
  )
}

Button.PropTypes = {
  children: PropTypes.element,
}

export default Button;
