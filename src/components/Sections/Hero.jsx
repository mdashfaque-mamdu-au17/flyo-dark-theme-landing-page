import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import Illustration from '../../assets/illustration-intro.png';
import BgCurvyMobile from '../../assets/bg-curvy-mobile.svg';
import BgCurvyDesktop from '../../assets/bg-curvy-desktop.svg';
const Hero = () => {
  return (
    <section className="bg-secondary-black pt-12 pb-[90px] md:pb-0 md:pt-[75px]">
      <div className="relative">
        <div className="w-[304px] lg:w-[720px] mx-auto relative z-20">
          <img
            src={Illustration}
            alt=""
            className="w-[304px] h-[225px] lg:w-[720px] lg:h-[534px]"
          />
        </div>

        <div className=" relative w-full md:hidden">
          <div className=" absolute -top-10  z-10 left-1/2 transform -translate-x-1/2 min-w-[375px]">
            <img src={BgCurvyMobile} alt="" className="" />
          </div>
        </div>

        <div className="absolute z-20  left-1/2 transform -translate-x-1/2 w-full sm:max-w-[600px] md:max-w-[734px]">
          <div className="text-center">
            <div className="px-[28px] pt-[33px] md:pt-[36px]">
              <Heading type="primary">
                All your files in one secure location, accessible anywhere.
              </Heading>
            </div>
            <div className="px-10 pt-[15px] pb-8 md:w-[589px] md:px-0 md:mx-auto md:pt-8">
              <Paragraph type="primary">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </Paragraph>
            </div>
            <div className="w-[240px] mx-auto md:w-[280px]">
              <Button
                btnType="primary"
                styles="md:pt-[19px] md:pb-[18px] md:text-base md:leading-[19px] rounded-[28px]"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="hidden md:block max-w-[1440px] mx-auto pt-[114px]">
            <img src={BgCurvyDesktop} alt="" />
          </div>
          {/* <div className="absolute bottom-0 w-full h-10 bg-primary-black"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
