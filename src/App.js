import Header from "./components/Header"
import Links from "./components/Links"
import Banner from "./components/Banner"
import About from "./components/About"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contacts from "./components/Contacts"
import School from "./components/School"
import "./style.scss";
import Recommendations from "./components/Recommendations"

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Banner />
      <School />
      <About />
      <Services />
      <Skills />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
