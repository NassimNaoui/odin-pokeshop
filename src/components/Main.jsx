export default function Main({
  avatar,
  setAvatar,
  avatarCard,
  setAvatarCard,
  catalogueItems,
}) {
  return (
    <>
      <main className="flex justify-center items-center h-full w-full bg-amber-400 ">
        <div className="flex justify-between  h-[98%] w-[98%] bg-red-400">
          <div className="  bg-blue-300">
            <ListItemsCategory catalogueItems={catalogueItems} />
            {/*<ListItemsName catalogueItems={catalogueItems} />*/}
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

function ListItemsCategory({ catalogueItems }) {
  const categories = catalogueItems.map((items) => items.category);
  const set = new Set(categories);
  const uniqueCategories = [...set];

  const listCategories = uniqueCategories.map((category) => (
    <>
      <button className="p-1" key={category}>
        {category}
      </button>
    </>
  ));

  return <div>{listCategories}</div>;
}

function ListItemsName({ catalogueItems }) {
  const listitems = catalogueItems.map((items) => (
    <>
      <div key={items.name}>{items.name}</div>
    </>
  ));

  return <div>{listitems}</div>;
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
        <div className="font-medium">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
      </div>
    </>
  ));

  return <div>{listAvatar}</div>;
}
