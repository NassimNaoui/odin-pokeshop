/* hook */
import { useEffect, useState } from "react";
/* background */
import background from "../assets/POKESHOP.png";
/* components */
import Header from "../components/Header";
import Main from "../components/Main";

export default function OnlineStore({ catalogueItems, uniqueCategories }) {
  const [avatar, setAvatar] = useState("red");
  const [avatarCard, setAvatarCard] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setselectedCategory] = useState(uniqueCategories[0]);
  const [selectedItem, setselectedItem] = useState("");
  const [likedItem, setLikedItem] = useState([]);
  const toggleLike = (id) => {
    setLikedItem((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  console.log(likedItem);

  useEffect(() => {
    const listItems =
      selectedCategory === ""
        ? catalogueItems
        : catalogueItems.filter((item) => item.category === selectedCategory);

    const sortedItems = [...listItems].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    if (sortedItems.length > 0) {
      setselectedItem(sortedItems[0].name);
    } else {
      setselectedItem(""); // au cas où il n’y a rien
    }
  }, [catalogueItems, selectedCategory]);

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
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
          selectedItem={selectedItem}
          setselectedItem={(e) => setselectedItem(e.target.textContent)}
          likedItem={likedItem}
          setLikedItem={toggleLike}
        ></Main>
        <footer></footer>
      </div>
    </>
  );
}
