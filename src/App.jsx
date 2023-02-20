import GlobalStyle from "./globalStyles"
import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation"
import PopularSection from "./components/PopularSection"

const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <HeroSection id="home" />
      <AboutSection id="about" />
      <PopularSection id="popular" />
    </div>
  )
}

export default App
