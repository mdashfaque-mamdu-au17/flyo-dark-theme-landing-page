import React from 'react';
import Illustration from '../../assets/illustration-intro.png';
const Hero = () => {
  return (
    <section className="bg-secondary-black pt-12 md:pt-[75px]">
      <div className="w-[304px] lg:w-[720px] mx-auto">
        <img
          src={Illustration}
          alt=""
          className="w-[304px] h-[225px] lg:w-[720px] lg:h-[534px]"
        />
      </div>
    </section>
  );
};

export default Hero;
