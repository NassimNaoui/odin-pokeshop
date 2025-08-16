import { useState } from "react";

export default function Main({
  avatar,
  setAvatar,
  avatarCard,
  setAvatarCard,
  catalogueItems,
  uniqueCategories,
  selectedCategory,
  setselectedCategory,
  selectedItem,
  setselectedItem,
  likedItem,
  setLikedItem,
}) {
  return (
    <>
      <main className="pt-16 h-screen overflow-y-auto">
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <ItemCard
                catalogueItems={catalogueItems}
                selectedCategory={selectedCategory}
                selectedItem={selectedItem}
                likedItem={likedItem}
                setLikedItem={setLikedItem}
              />
            </div>
          </div>
          <div className="">
            {avatarCard && (
              <div className="flex justify-end border-2 bg-gray-50 border-neutral-400 shadow-lg rounded-2xl">
                <AvatarChoice
                  avatar={avatar}
                  setAvatar={setAvatar}
                  setAvatarCard={setAvatarCard}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function ItemCard({
  catalogueItems,
  selectedCategory,
  likedItem,
  setLikedItem,
}) {
  const items =
    selectedCategory.length === 0
      ? catalogueItems
      : catalogueItems.filter((item) => item.category === selectedCategory);

  if (!items.length) return null;

  return items.map((item) => (
    <div
      className="bg-white border border-neutral-500 rounded-lg w-[150px] h-[175px] md:w-[200px] md:h-[210px] lg:w-[250px] lg:h-[275px] flex flex-col cursor-pointer hover:border-indigo-400 hover:border-2"
      key={item.name}
    >
      <div className="h-[60%] flex items-center justify-center bg-indigo-100 rounded-t-lg">
        <img
          className="h-[100px] md:h-[125px] lg:h-[150px]"
          src={item.sprites}
          alt={item.name}
        />
      </div>
      <div className="px-2.5">
        <div className="w-full flex justify-between items-center">
          <div className="text-sm md:text-xl capitalize font-bold text-neutral-800">
            {item.name}
          </div>
          <div
            className={
              likedItem.includes(item.name)
                ? "text-xl md:text-3xl text-red-500"
                : "text-xl md:text-3xl text-gray-500 hover:text-red-300 hover:scale-110 transition-all duration-300 ease-in"
            }
            onClick={() => setLikedItem(item.name)}
          >
            ♥
          </div>
        </div>

        <div className="text-sm md:text-xl flex justify-between">
          <div className="flex">
            <div>₽</div>
            <div>{item.cost}</div>
          </div>
          <div className="text-red-500">
            {item.cost === 0 ? "Out of stock" : ""}
          </div>
        </div>
      </div>
    </div>
  ));
}

function ShopCard({}) {
  return (
    <>
      <div className="flex justify-between bg-neutral-50 border border-neutral-400 rounded-lg">
        <div className="bg-indigo-200 p-2 rounded-tl-lg  rounded-bl-lg cursor-pointer hover:bg-pink-500">
          <img className="h-[24px] w-[24px]" src={heart} alt="" />
        </div>
        <div className="bg-indigo-200 p-2 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-indigo-500">
          <img className="h-[24px] w-[24px]" src={shopbag} alt="" />
        </div>
      </div>
    </>
  );
}

function ListItemsCategory({
  uniqueCategories,
  selectedCategory,
  setselectedCategory,
}) {
  return (
    <>
      {uniqueCategories.map((category) => {
        const isSelected = category === selectedCategory;

        return (
          <button
            key={category}
            className={`capitalize flex-none px-3 py-2 rounded-lg border border-gray-400 cursor-pointer ${
              isSelected ? "bg-indigo-500 text-white" : "bg-gray-100"
            } hover:bg-indigo-200 `}
            onClick={setselectedCategory}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

function ListItemsName({
  catalogueItems,
  selectedCategory,
  selectedItem,
  setselectedItem,
}) {
  const listItems =
    selectedCategory === ""
      ? catalogueItems
      : catalogueItems.filter((items) => items.category === selectedCategory);

  const sortedItems = [...listItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredItems = sortedItems.map((items) => (
    <>
      <div
        key={items.name}
        onClick={setselectedItem}
        className={`capitalize p-1 cursor-pointer ${
          items.name === selectedItem
            ? "bg-indigo-500 text-white"
            : "bg-gray-50"
        } hover:bg-indigo-100`}
      >
        {items.name}
      </div>
    </>
  ));

  return (
    <div className="bg-gray-50 h-fit max-h-[800px] border border-neutral-400 rounded-lg overflow-auto">
      {filteredItems}
    </div>
  );
}

// icons
import shopbag from "../assets/Shopping cart.png";
import heart from "../assets/Heart.png";

/* avatar */
import peter from "../assets/AVATAR_PETER.png";
import cinthyia from "../assets/AVATAR_CINTHYIA.png";
import red from "../assets/AVATAR_RED.png";

const avatarMap = { peter: peter, cinthyia: cinthyia, red: red };

function AvatarChoice({ avatar, setAvatar, setAvatarCard }) {
  const filteredAvatar = Object.fromEntries(
    Object.entries(avatarMap).filter(([key]) => key.toLowerCase() !== avatar)
  );
  const listAvatar = Object.entries(filteredAvatar).map(([name, src]) => (
    <>
      <div
        key={name}
        className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-indigo-50"
      >
        <div
          data-name={name}
          onClick={(e) => {
            setAvatar(e);
            setAvatarCard();
          }}
          className="h-[72px] w-[72px] cursor-pointer rounded-full bg-red-500 border-[2px] border-white hover:border-indigo-500"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="capitalize font-medium">{name}</div>
      </div>
    </>
  ));

  return <div>{listAvatar}</div>;
}

{
  /* text item style :
<div className="text-pretty text-neutral-700 text-sm">
          {item.effet.slice(0, 200)}
          {item.effet.length > 200 && "..."}
        </div>*/
}
