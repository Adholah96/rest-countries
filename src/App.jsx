import './App.css';
import Nav from './components/nav';
import { Filter } from './components/filter';
import { Country } from './components/country';

const countries = {
  name: 'Afghanistan',
  capital: 'Kabul',
  region: 'Asia',
  population: 40218234,
  flags: {
    svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
  },
};

function App() {
  return (
    <>
      <Nav />
      <Filter />
      <div className="country-holder">
        <Country
          title={countries.name}
          capital={countries.capital}
          region={countries.region}
          population={countries.population}
          image={countries.flags.png}
        />
        <Country
          title={countries.name}
          capital={countries.capital}
          region={countries.region}
          population={countries.population}
          image={countries.flags.png}
        />
      </div>
    </>
  );
}

export default App;
