import Button from './components/Button/Button';
import Link from './components/Button/Link';
import { ArrowIcon } from './components/Button/Icons';
import Arrow from './assets/icon-arrow.svg';
import Heading from './components/Texts/Heading';
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
    </div>
  );
}

export default App;
