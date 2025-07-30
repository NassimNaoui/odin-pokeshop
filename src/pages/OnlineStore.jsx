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

  const [avatar, setavAtar] = useState("red");
  const [searchBar, setSearchBar] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // console.log(`from online - search value:${searchValue}`);

  return (
    <>
      <div style={style}>
        <Header
          avatar={avatar}
          searchBar={searchBar}
          setSearchBar={() => setSearchBar(!searchBar)}
          searchValue={searchValue}
          setSearchValue={(e) => setSearchValue(e.target.value)}
        />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
