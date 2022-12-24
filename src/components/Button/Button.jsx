import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { btnType } = props;
  const applyStyle = () => {
    if (btnType === 'primary') {
      // btn-primary is custom css class
      return 'btn-primary py-4 text-sm leading-4 font-bold text-creame-white w-full rounded-3xl md:py-[15px] shadow-3xl';
    }
  };
  if (btnType === 'primary') {
    return (
      <button className={classNames(applyStyle())}>{props.children}</button>
    );
  }
  if (btnType === 'secondary') {
    return <button>{props.children}</button>;
  }
};

Button.propTypes = {
  btnType: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
