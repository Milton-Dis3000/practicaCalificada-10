// "use client";
import CardPokemon from "@/components/CardPoquemon";


async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=26");
  const firstData = data.results;

  return (
    <div id="contenedor">
      {firstData.map((el, i) => (
        <CardPokemon key={i} url={el.url} />
      ))}
    </div>
  );
}