import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Paragraph = (props) => {
  const { type, styles } = props;
  const applyCommonStyle = () => {
    return 'text-creame-white font-normal';
  };

  const applyStyle = () => {
    if (type === 'primary') {
      return 'text-sm leading-[21px] md:text-xl md:leading-[30px]';
    }
    if (type === 'secondary') {
      return 'text-sm leading-[21px]';
    }
    if (type === 'third') {
      return 'text-sm leading-[21px] md:text-base md:leading-6';
    }
    if (type === 'fourth') {
      return 'text-[10px] leading-[18px] md:text-sm md:leading-[21px]';
    }
    if (type === 'fifth') {
      return 'text-base leading-6';
    }
  };
  return (
    <p className={classNames(applyCommonStyle(), applyStyle())}>
      {props.children}
    </p>
  );
};

Paragraph.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'third', 'fourth', 'fifth']),
};

export default Paragraph;
