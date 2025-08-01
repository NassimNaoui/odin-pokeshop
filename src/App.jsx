import { useState, useEffect, use } from "react";
import "./App.css";
import OnlineStore from "./pages/OnlineStore";
import Loader from "./pages/Loader.jsx";
import items from "./data/pokemonItemsNameShort.json";

//const items = ["master-ball", "moomoo-milk", "ultra-ball"];

function App() {
  const [loaderActive, setLoaderActive] = useState(false);
  const [catalogueItems, setcatalogueItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const results = await Promise.all(
          items.map(async (itemName) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/item/${itemName}`,
              { mode: "cors" }
            );

            if (!res.ok) {
              console.warn(`Échec pour ${itemName}: ${res.status}`);
              return null;
            }

            const data = await res.json();

            // Mise à plat ici
            const effect = data.effect_entries?.find(
              (entry) => entry.language.name === "en"
            );

            return {
              name: data.name,
              category: data.category?.name || null,
              cost: data.cost,
              effet: effect?.effect || null,
              sprites: data.sprites?.default || null,
            };
          })
        );

        // Filtrer les éventuelles réponses null (erreurs API)
        const cleanedResults = results.filter(Boolean);

        setcatalogueItems(cleanedResults);
      } catch (error) {
        console.error("Erreur lors de la récupération des items :", error);
      }
    };

    fetchAllItems();
  }, []);

  if (loaderActive) {
    return <Loader />;
  } else {
    return <OnlineStore catalogueItems={catalogueItems} />;
  }
}

export default App;
