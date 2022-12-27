import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import AnyWhereIcon from '../../assets/icon-access-anywhere.svg';

const FeatureCard = (props) => {
  const { icon, title, description, width } = props;
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="h-[104px] w-[104px] flex justify-center items-center">
          <img src={AnyWhereIcon} alt="" className={classNames(width)} />
        </div>
      </div>

      <div className="pt-6 md:pt-4">
        <Heading type="other-type">Access your files, anywhere</Heading>
      </div>
      <div className="pt-2">
        <Paragraph type="secondary">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </Paragraph>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
