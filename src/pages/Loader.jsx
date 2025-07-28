import background from "../assets/LOADER-POKESHOP.png"; // <-- import JS correct

function Loader() {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <body style={style}>
        <h1>test loader</h1>
      </body>
    </>
  );
}

export default Loader;
