import React from 'react';
import TestimonialCard from '../Card/TestimonialCard';
import Satish from '../../assets/profile-1.jpg';
import Bruce from '../../assets/profile-2.jpg';
import Iva from '../../assets/profile-3.jpg';
import Quote from '../../assets/bg-quotes.png';

const TestimonialsSection = () => {
  return (
    <section className="pt-[160px] pb-[337px] max-w-[1180px] mx-auto lg:pt-[179px] lg:pb-[360px]">
      <div className="flex flex-wrap justify-center gap-6 xl:gap-10">
        <div className="relative z-30">
          <TestimonialCard
            review="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
            photo={Satish}
            name="Satish Patel"
            profession="Founder & CEO, Huddle"
          />
          <div className="absolute -top-5 left-1 z-10 xl:-top-9 xl:-left-2.5">
            <img
              src={Quote}
              alt=""
              className="w-6 h-6 xl:w-[55px] xl:h-[45px] z-10"
            />
          </div>
        </div>
        <div>
          <TestimonialCard
            review="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            photo={Bruce}
            name="Bruce McKenzie"
            profession="Founder & CEO, Huddle"
          />
        </div>
        <div>
          <TestimonialCard
            review="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            photo={Iva}
            name="Iva Boyd"
            profession="Founder & CEO, Huddle"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
