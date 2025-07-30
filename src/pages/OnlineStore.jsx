/* hook */
import { useState } from "react";
/* background */
import background from "../assets/POKESHOP.png";
/* components */
import Header from "../components/Header";

export default function OnlineStore() {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    gridTemplateRows: "0.2fr 2.6fr 0.2fr",
  };

  const [avatar, setavAtar] = useState("cinthyia");
  const [searchBar, setSearchBar] = useState(true);

  console.log(`from online :${searchBar}`);

  return (
    <>
      <div style={style}>
        <Header
          avatar={avatar}
          searchBar={searchBar}
          setSearchBar={() => setSearchBar(!searchBar)}
        />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
