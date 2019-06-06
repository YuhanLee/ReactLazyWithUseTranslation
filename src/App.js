
import React from "react";
import ReactDOM from "react-dom";

import  { LazyLogInPage } from "./LazyLogInPage"; 

function App() {
  return (
    <LazyLogInPage/>
  ); 
}

export default App; 

ReactDOM.render(
  <App />,
  document.getElementById("root")
);