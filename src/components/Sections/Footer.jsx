import React from 'react';
import FormBox from './FormBox';
import Paragraph from '../Texts/Paragraph';
import Link from '../Button/Link';
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from '../Button/Icons';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames';

const Footer = () => {
  const linkStyle =
    'group w-7 h-7 rounded-full border-[1px] border-white  flex items-center justify-center text-white hover:border-secondary-cyan cursor-pointer md:w-8 md:h-[31px]';
  return (
    <footer className="pt-[259px] pb-[52px] bg-primary-violet relative">
      <div className="absolute -top-[177px] left-1/2 transform -translate-x-1/2  w-[336px] md:w-[750px] lg:w-[863px]">
        <FormBox />
      </div>

      <div className="px-7 xl:max-w-[1240px] mx-auto">
        <div className="pb-[35px]">
          <img src={Logo} alt="" className="w-[108px] h-[31px]" />
        </div>

        {/* box 1 */}
        <div>
          <div>
            <div>
              <div className="flex gap-4 pb-4">
                <div className="w-6 h-6 flex items-center justify-start grow shrink-0">
                  <LocationIcon />
                </div>

                <div className="">
                  <Paragraph type="fifth">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div>
                  <PhoneIcon />
                </div>
                <div>
                  <Paragraph type="secondary">+1-543-123-4567</Paragraph>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <MailIcon />
                </div>
                <div>
                  <Paragraph type="secondary">example@fylo.com</Paragraph>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-14">
              <Link type="navigation-footer">About Us</Link>
              <Link type="navigation-footer">Jobs</Link>
              <Link type="navigation-footer">Press</Link>
              <Link type="navigation-footer">Blog</Link>
            </div>

            <div className="flex flex-col gap-4 pt-12">
              <Link type="navigation-footer">Contact Us</Link>
              <Link type="navigation-footer">Terms</Link>
              <Link type="navigation-footer">Privacy</Link>
            </div>

            <div className="pt-14 flex justify-center gap-[9px] items-center">
              <a className={classNames(linkStyle)}>
                <FacebookIcon />
              </a>

              <a className={classNames(linkStyle)}>
                <TwitterIcon />
              </a>

              <a className={classNames(linkStyle)}>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
