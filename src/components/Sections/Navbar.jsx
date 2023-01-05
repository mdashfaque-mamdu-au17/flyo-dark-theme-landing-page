import React from 'react';
import Link from '../Button/Link';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-secondary-black pt-6 md:pt-[73px]">
        <div className="pl-5 pr-6 flex justify-between items-center max-w-screen-xl mx-auto 2xl:pl-0 2xl:pr-0">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-6 md:w-[176px] md:h-[52px]"
            />
          </div>
          <div className="flex gap-6 items-center lg:gap-[57px]">
            <Link type="navigation">Features</Link>
            <Link type="navigation">Team</Link>
            <Link type="navigation">Sign in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
