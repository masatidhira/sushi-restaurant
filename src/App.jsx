import GlobalStyle from './globalStyles';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
