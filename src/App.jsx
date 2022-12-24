import Button from './components/Button/Button';
import Link from './components/Button/Link';
import { ArrowIcon } from './components/Button/Icons';
import Arrow from './assets/icon-arrow.svg';
function App() {
  return (
    <div className="text-center">
      <Link type="navigation">Sign in</Link>
      <div className="mt-10">
        <Link type="navigation-footer">About</Link>
      </div>
      <div className="mt-10 w-[500px] mx-auto">
        <Button btnType="primary">Get Started For Free</Button>
      </div>
    </div>
  );
}

export default App;
