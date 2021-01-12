import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header.js";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Header />
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App; // App을 index.js로 내보내기 위한 export 문입니다.
