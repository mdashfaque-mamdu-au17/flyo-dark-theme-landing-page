import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Form from './Form';
const FormBox = () => {
  return (
    <section className="bg-light-dark pt-10 pb-[37px] rounded-[9px] px-[28px] max-w-[863px] mx-auto md:pt-[42px] md:pb-[41px]">
      <div className="pb-6 md:pb-4">
        <Heading type="secondary" styles="md:text-[32px] md:leading-[48px]">
          Get early access today
        </Heading>
      </div>

      <div className="pb-6 md:px-[95px] md:pb-[38px]">
        <Paragraph type="secondary">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Paragraph>
      </div>
      <div className="md:flex md:justify-center">
        <Form />
      </div>
    </section>
  );
};

export default FormBox;
