import './App.css';
import Nav from './components/nav';
import { Filter } from './components/filter';
import { Country } from './components/country';
import data from '/data.json';
import { DisplayCountry } from './routes/displayCountry';

function App() {

  const data ={
    "name": "Afghanistan",
    "topLevelDomain": [".af"],
    "capital": "Kabul",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 40218234,
    "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    "flags": {
      "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    },
    "nativeName": "افغانستان",
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
   
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    
  }
  
  return (
    // <>
    //   <Nav />
    //   <Filter />
    //   <div className="country-holder">
    //     {data.map((countries, i) => (
    //       <Country
    //         key={i}
    //         title={countries.name}
    //         capital={countries.capital}
    //         reg "nativeName": "افغانستان",ion={countries.region}
    //         population={countries.population}
    //         image={countries.flags.png}
    //       />
    //     ))}
    //   </div>
    // </>
    <DisplayCountry
    key={1}
    title={data.name}
    capital={data.capital}
    region={data.region}
    population={data.population}
    image={data.flags.png}
    topLevelDomain={data.topLevelDomain}
     currencies={data.currencies}
     countryBorders={data.borders}
     languages={data.languages}
     nativeName={data.nativeName}
     subRegion={data.subregion}
    />
  );
}

export default App;
