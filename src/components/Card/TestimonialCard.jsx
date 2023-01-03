import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Texts/Paragraph';

const TestimonialCard = (props) => {
  const { review, photo, name, profession } = props;
  return (
    <div className="relative z-20 bg-secondary-black rounded pt-6 pb-[22px] px-[20px] max-w-[280px] shadow-4xl md:max-w-[360px] md:pt-10 md:pb-[26px] md:pl-[26px] md:pr-6">
      <div className="text-left pb-[17px] md:pb-6">
        <Paragraph type="fourth">{review}</Paragraph>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <img src={photo} alt="" className="h-6 w-6 rounded-full" />
        </div>
        <div className="flex flex-col justify-start gap-1">
          <p className="text-[10px] text-left font-bold leading-3 text-creame-white">
            {name}
          </p>
          <p className="text-[7px] text-creame-white leading-[10px] tracking-[0.5px]">
            {profession}
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default TestimonialCard;
