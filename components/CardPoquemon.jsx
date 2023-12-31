import Link from "next/link";




function Spiner(){
  return(
    <svg
    xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="spinner"
    x="0px"
    y="0px"
    width="100px"
    height="100px"
    viewBox="0 0 864 864"
  >
    <circle fillRule="evenodd" cx="447.178" cy="447.632" r="348.003" />
    <g>
      <path
        fillRule="evenodd"

        clipRule="evenodd"

        fill="#FFFFFF"

        d="M573.713,473.543c-11.995,58.904-64.089,103.231-126.535,103.231 c-62.447,0-114.54-44.327-126.535-103.231H141.169c13.155,157.485,145.125,281.202,306.008,281.202 c160.884,0,292.855-123.717,306.011-281.202H573.713z"
      />
      <path
        fillRule="evenodd"

        clipRule="evenodd"

        fill="#FFFFFF"

        d="M447.178,357.277c-49.904,0-90.36,40.456-90.36,90.362   c0,49.904,40.456,90.361,90.36,90.361c49.906,0,90.361-40.457,90.361-90.361C537.539,397.733,497.084,357.277,447.178,357.277z    M447.179,492.218c-24.621,0-44.579-19.958-44.579-44.578c0-24.621,19.958-44.579,44.579-44.579   c24.62,0,44.578,19.958,44.578,44.579C491.757,472.26,471.799,492.218,447.179,492.218z"
      />
    </g>
    <path
      fillRule="evenodd"

      clipRule="evenodd"

      fill="#ED1C24"

      d="M447.178,318.504c62.446,0,114.54,44.327,126.535,103.232h179.475  c-13.155-157.485-145.127-281.203-306.011-281.203c-160.882,0-292.852,123.718-306.008,281.203h179.474  C332.638,362.831,384.73,318.504,447.178,318.504z"
    />

  </svg>
  )
}



async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;

}



async function CardPokemon({ url }) {
  const dataPokemon = await getData(url);
  const imagePokemon = dataPokemon.sprites.front_default;
  // console.log();

  


  
  return (
    <Link href={`info/${dataPokemon.id}`} target="_blank">
      <div className="cardPokemon">
        <div>
          <img src={imagePokemon} alt="Spiderman" />
        </div>
        <div className="spliner">
       <Spiner/>
      </div>
        <h1>{dataPokemon.name}</h1>
        <p>{dataPokemon.id}</p>
      </div>
     
    </Link>
  );
}

export default CardPokemon;