import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
// import Alert from "./Components/Alert";

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar
            title="dodo24"
            mode={mode}
            togglemode={togglemode}
            home="Home"
          />
          {/* <Alert alert="this is alert"/> */}

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform heading="This is Heading" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
