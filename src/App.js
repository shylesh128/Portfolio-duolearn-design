import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Table from "./components/Table";

function App() {
  return (
    <div className="App flex flex-col gap-16">
      <Navbar />
      <Hero />
      <Skills />
      <Table />
      <About />
      <Connect />
    </div>
  );
}

export default App;
