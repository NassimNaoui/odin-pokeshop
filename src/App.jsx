import { useState } from "react";
import "./App.css";
import OnlineStore from "./pages/OnlineStore";
import Loader from "./pages/Loader.jsx";

function App() {
  const [loaderActive, setLoaderActive] = useState(false);

  return loaderActive ? Loader() : OnlineStore();
}

export default App;
