import React from 'react';
import Paragraph from '../Texts/Paragraph';
import Satish from '../../assets/profile-1.jpg';
const TestimonialCard = () => {
  return (
    <div className="bg-secondary-black rounded pt-6 pb-[22px] px-[20px] max-w-[280px] shadow-4xl md:max-w-[360px] md:pt-10 md:pb-[26px] md:pl-[26px] md:pr-6">
      <div className="text-left pb-[17px] md:pb-6">
        <Paragraph type="fourth">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </Paragraph>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <img src={Satish} alt="" className="h-6 w-6 rounded-full" />
        </div>
        <div className="flex flex-col justify-start gap-1">
          <p className="text-[10px] text-left font-bold leading-3 text-creame-white">
            Satish Patel
          </p>
          <p className="text-[7px] text-creame-white leading-[10px] tracking-[0.5px]">
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
