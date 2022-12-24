import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Heading = (props) => {
  const { type, styles } = props;
  const applyCommonStyle = () => {
    return 'text-creame-white font-bold';
  };
  const applyStyle = () => {
    if (type === 'primary') {
      return 'text-2xl leading-9 md:text-[40px] md:leading-[60px]';
    }
    if (type === 'secondary') {
      return 'text-lg leading-6 md:text-[40px] md:leading-[50px]';
    }
    if (type === 'other-type') {
      return 'text-lg leading-6 md:text-xl md:leading-[23px]';
    }
  };
  if (type === 'primary') {
    return (
      <h1 className={classNames(applyCommonStyle(), applyStyle())}>
        {props.children}
      </h1>
    );
  }
  if (type === 'secondary') {
    return (
      <h4 className={classNames(applyCommonStyle(), applyStyle(), styles)}>
        {props.children}
      </h4>
    );
  }
  if (type === 'other-type') {
    return (
      <h6 className={classNames(applyCommonStyle(), applyStyle())}>
        {props.children}
      </h6>
    );
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'other-type']),
};
export default Heading;
