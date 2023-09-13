import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Feature from "./Components/Feature/Feature";
import Main from "./Components/Main/Main";
import Platform from "./Components/Platforms/Platform";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <Main />
      <Platform />
    </>
  );
}

export default App;
