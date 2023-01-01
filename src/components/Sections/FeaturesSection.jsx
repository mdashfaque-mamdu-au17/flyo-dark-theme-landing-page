import React from 'react';
import FeatureCard from '../Card/FeatureCard';
import AnyWhereIcon from '../../assets/icon-access-anywhere.svg';
import SecurityIcon from '../../assets/icon-security.svg';
import CollaborationIcon from '../../assets/icon-collaboration.svg';
import FilesIcon from '../../assets/icon-any-file.svg';

const FeaturesSection = () => {
  return (
    <section className="pt-[300px] sm:pt-[230px] md:pt-[120px] lg:pt-0">
      <div className="max-w-[880px] mx-auto grid grid-cols-1 gap-y-20 justify-items-center md:grid-cols-2 md:gap-y-[78px] md:px-6 lg:px-0">
        <div className="text-center w-[320px] lg:w-[349px] md:justify-self-start">
          <FeatureCard
            icon={AnyWhereIcon}
            title="Access your files, anywhere"
            description="The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere."
            width="w-[64px] h-[60px] md:w-[84px] md:h-[78px]"
          />
        </div>
        <div className="text-center w-[320px] lg:w-[384px]  md:justify-self-end">
          <FeatureCard
            icon={SecurityIcon}
            title="Security you can trust"
            description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
            width="w-[51px] h-[64px] md:w-[66px] md:h-[84px]"
          />
        </div>
        <div className="text-center w-[320px] lg:w-[363px]  md:justify-self-start">
          <FeatureCard
            icon={CollaborationIcon}
            title="Real-time collaboration"
            description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
            width="w-[64px] h-[53px] md:w-[84px] md:h-[69px]"
          />
        </div>
        <div className="text-center w-[320px] lg:w-[363px]  md:justify-self-end">
          <FeatureCard
            icon={FilesIcon}
            title="Store any type of file"
            description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
            width="w-[69px] h-[48px] md:w-[90px] md:h-[63px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
