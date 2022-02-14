import './App.css';
import UnderRoot from './components/UnderRoot';
import ErrorBoundary from './wrappers/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <UnderRoot />
    </ErrorBoundary>
  );
}

export default App;
