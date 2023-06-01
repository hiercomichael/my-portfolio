import Header from "./components/Header"
import Links from "./components/Links"
import Banner from "./components/Banner"
import About from "./components/About"
import Works from "./components/Works"
import Contacts from "./components/Contacts"
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Banner />
      <About />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
