import { useState } from "react";
import "./App.css";
import OnlineStore from "./pages/OnlineStore";
import Loader from "./pages/Loader.jsx";

function App() {
  const [loaderActive, setLoaderActive] = useState(false);

  if (loaderActive) {
    return <Loader />;
  } else {
    return <OnlineStore />;
  }
}

export default App;
