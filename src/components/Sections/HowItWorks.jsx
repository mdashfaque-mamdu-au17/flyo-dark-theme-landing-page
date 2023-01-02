import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import StayProductive from '../../assets/illustration-stay-productive.png';
import IconArrow from '../../assets/icon-arrow.svg';
import { ArrowIcon } from '../Button/Icons';
const HowItWorks = () => {
  return (
    <section className="pt-[160px] lg:pt-[134px]">
      <div className="xl:max-w-[1234px] xl:mx-auto lg:flex lg:items-center xl:gap-[57px]">
        <div className="mx-auto w-[304px] xl:w-[614px] xl:mx-0">
          <img
            src={StayProductive}
            alt=""
            className="w-[304px] h-[229px] xl:w-[614px] xl:h-[463px]"
          />
        </div>

        <div className="pt-12 px-7 max-w-[563px] mx-auto xl:mx-0 xl:px-0">
          <div className="lg:pr-[57px]">
            <Heading type="secondary">
              Stay productive, wherever you are
            </Heading>
          </div>
          <div className="py-4">
            <Paragraph type="third">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </Paragraph>
          </div>
          <div>
            <Paragraph type="third">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </Paragraph>
          </div>
          <div className="pt-4">
            <button className="group flex gap-[7px] items-center text-xs leading-4 text-[#62E0D9] border-b-[1px] border-b-[#62E0D9] hover:text-white hover:border-b-white md:text-base md:leading-[22px]">
              <span>See how Fylo works</span>
              <span className="">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
