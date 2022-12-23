import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { type } = props;
  const applyStyle = () => {
    if (type === 'navigation') {
      return 'text-xs text-creame-white leading-[14px] font-normal md:text-base leading-[19px] hover:font-bold hover:underline hover:decoration-1';
    }
    if (type === 'navigation-footer') {
      return 'text-base text-creame-white leading-[22px] font-normal hover:font-bold';
    }
  };
  return (
    <a href="#" className={classNames(applyStyle())}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  type: PropTypes.oneOf(['navigation', 'navigation-footer']),
};
export default Link;
