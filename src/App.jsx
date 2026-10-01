import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import ColorSearch from "./ColorSearch";
import ColorBox from "./ColorBox";

function App() {
  const [colorName, setColorName] = useState("");
  return (
    <div className="App">
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>

      <ColorBox value={colorName} />
      <ColorSearch colorName={colorName} setColorName={setColorName} />
    </div>
  );
}

export default App;
