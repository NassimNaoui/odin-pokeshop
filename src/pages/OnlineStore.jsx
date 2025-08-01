/* hook */
import { useState } from "react";
/* background */
import background from "../assets/POKESHOP.png";
/* components */
import Header from "../components/Header";
import Main from "../components/Main";

export default function OnlineStore({ catalogueItems }) {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    gridTemplateRows: "0.2fr 2.6fr 0.2fr",
  };

  const [avatar, setAvatar] = useState("red");
  const [avatarCard, setAvatarCard] = useState(false);
  const [searchBar, setSearchBar] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // console.log(`from online - search value:${searchValue}`);

  return (
    <>
      <div style={style}>
        <Header
          avatar={avatar}
          setAvatarCard={() => setAvatarCard(!avatarCard)}
          searchBar={searchBar}
          setSearchBar={() => setSearchBar(!searchBar)}
          searchValue={searchValue}
          setSearchValue={(e) => setSearchValue(e.target.value)}
        />
        <Main
          avatar={avatar}
          setAvatar={(e) => setAvatar(e.currentTarget.dataset.name)}
          avatarCard={avatarCard}
          setAvatarCard={() => setAvatarCard(!avatarCard)}
          catalogueItems={catalogueItems}
        ></Main>
        <footer></footer>
      </div>
    </>
  );
}
