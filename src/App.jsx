import './App.css';
import Nav from './components/nav';
import { Filter } from './components/filter';
import { Country } from './components/country';
// import data from '/data.json';
import { DisplayCountry } from './routes/displayCountry';

function App() {

  const data ={
    "name": "Algeria",
    "topLevelDomain": [".dz"],
    "alpha2Code": "DZ",
    "alpha3Code": "DZA",
    "callingCodes": ["213"],
    "capital": "Algiers",
    "altSpellings": ["DZ", "Dzayer", "Algérie"],
    "subregion": "Northern Africa",
    "region": "Africa",
    "population": 44700000,
    "latlng": [28, 3],
    "demonym": "Algerian",
    "area": 2381741,
    "gini": 27.6,
    "timezones": ["UTC+01:00"],
    "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    "nativeName": "الجزائر",
    "numericCode": "012",
    "flags": {
      "svg": "https://flagcdn.com/dz.svg",
      "png": "https://flagcdn.com/w320/dz.png"
    },
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "translations": {
      "br": "Aljeria",
      "pt": "Argélia",
      "nl": "Algerije",
      "hr": "Alžir",
      "fa": "الجزایر",
      "de": "Algerien",
      "es": "Argelia",
      "fr": "Algérie",
      "ja": "アルジェリア",
      "it": "Algeria",
      "hu": "Algéria"
    },
    "flag": "https://flagcdn.com/dz.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      },
      {
        "acronym": "AL",
        "name": "Arab League",
        "otherNames": [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States"
        ]
      }
    ],
    "cioc": "ALG",
    "independent": true
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
    image={data.flags.svg}
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
