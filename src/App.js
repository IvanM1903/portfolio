import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density:{
                enable:true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke:{
                width: 6,
                color: "fff"
              }
            }
          }
        }}
      />
      <AboutMe/>
      <Portfolio/>
    </>
  );
}

export default App;
