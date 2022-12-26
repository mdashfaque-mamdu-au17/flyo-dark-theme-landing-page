import Button from './components/Button/Button';
import Link from './components/Button/Link';
import { ArrowIcon } from './components/Button/Icons';
import Arrow from './assets/icon-arrow.svg';
import Heading from './components/Texts/Heading';
import Paragraph from './components/Texts/Paragraph';
function App() {
  return (
    <div className="text-center">
      <Link type="navigation">Sign in</Link>
      <div className="mt-10">
        <Link type="navigation-footer">About</Link>
      </div>
      <div className="mt-10  mx-auto">
        <Button btnType="primary">Get Started For Free</Button>
      </div>

      <div className="mt-10">
        <Heading type="primary">
          All your files in one secure location, accessible anywhere.
        </Heading>
      </div>
      <div className="mt-10">
        <Heading type="secondary">Stay productive, wherever you are</Heading>
      </div>

      {/* on contact form */}
      <div className="mt-10">
        <Heading type="secondary" styles="md:text-[32px] md:leading-[48px]">
          Get early access today
        </Heading>
      </div>

      <div className="mt-10">
        <Heading type="other-type">Access your files, anywhere</Heading>
      </div>

      <div className="mt-10">
        <Paragraph type="primary">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </Paragraph>
      </div>

      <div className="mt-10">
        <Paragraph type="secondary">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </Paragraph>
      </div>

      <div className="mt-10">
        <Paragraph type="third">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </Paragraph>
      </div>

      <div className="mt-10">
        <Paragraph type="fifth">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
