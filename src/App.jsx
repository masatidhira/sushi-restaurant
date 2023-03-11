import GlobalStyle from './globalStyles';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Homepage />
    </div>
  );
};

export default App;
