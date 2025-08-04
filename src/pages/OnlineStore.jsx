/* hook */
import { useState } from "react";
/* background */
import background from "../assets/POKESHOP.png";
/* components */
import Header from "../components/Header";
import Main from "../components/Main";

export default function OnlineStore({ catalogueItems, uniqueCategories }) {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    gridTemplateRows: "0.2fr 2.6fr 0.2fr",
  };

  console.log(catalogueItems);
  const [avatar, setAvatar] = useState("red");
  const [avatarCard, setAvatarCard] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

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
          uniqueCategories={uniqueCategories}
          selectedCategory={selectedCategory}
          setselectedCategory={(e) =>
            e.target.textContent === selectedCategory
              ? setselectedCategory("")
              : setselectedCategory(e.target.textContent)
          }
        ></Main>
        <footer></footer>
      </div>
    </>
  );
}
