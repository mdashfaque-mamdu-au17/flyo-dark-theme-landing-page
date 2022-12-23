import Link from './components/Button/Link';

function App() {
  return (
    <div className="text-center">
      <Link type="navigation">Sign in</Link>
      <div className="mt-10">
        <Link type="navigation-footer">About</Link>
      </div>
    </div>
  );
}

export default App;
