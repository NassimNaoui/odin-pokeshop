export default function Main({
  avatar,
  setAvatar,
  avatarCard,
  setAvatarCard,
  catalogueItems,
  uniqueCategories,
  selectedCategory,
  setselectedCategory,
}) {
  return (
    <>
      <main className="flex justify-center items-center h-full w-full bg-amber-400">
        <div className="flex justify-between h-full max-h-[1050px] m-2 bg-red-400">
          <div className="flex flex-row h-full gap-2 bg-blue-300">
            <div className="h-full w-[10%]">
              <ListItemsName
                catalogueItems={catalogueItems}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="flex flex-wrap gap-1 items-center h-[30%] w-[30%]">
              <ListItemsCategory
                uniqueCategories={uniqueCategories}
                selectedCategory={selectedCategory}
                setselectedCategory={setselectedCategory}
              />
            </div>
          </div>
          <div className="  bg-green-200">
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

function ListItemsName({ catalogueItems, selectedCategory }) {
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
        className="capitalize p-1 cursor-pointer hover:bg-indigo-100"
      >
        {items.name}
      </div>
    </>
  ));

  return <div className="bg-gray-50 h-full overflow-auto">{filteredItems}</div>;
}

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
