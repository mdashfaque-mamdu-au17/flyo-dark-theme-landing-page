import classNames from 'classnames';
import React from 'react';

const Input = (props) => {
  const {
    label,
    id,
    type,
    errorMessage,
    error,
    name,
    value,
    onChange,
    onBlur,
  } = props;
  return (
    <div className="">
      <label htmlFor={id} hidden>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        className={classNames(
          'h-12 bg-white text-primary-black-600 placeholder:text-light-gray text-xs leading-4 pl-8 rounded-3xl focus:outline-none w-full shadow-input-shadow md:pl-[38px]'
        )}
        onBlur={onBlur}
      />

      {error && (
        <div className="text-primary-red text-left pl-8 text-xs font-bold leading-[14px] pt-[5px] md:pl-[38px]">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
