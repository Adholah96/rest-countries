import './App.css';
import Nav from './components/nav';
import { Filter } from './components/filter';
import { Country } from './components/country';
import data from '/data.json';

function App() {
  return (
    <>
      <Nav />
      <Filter />
      <div className="country-holder">
        {data.map((countries, i) => (
          <Country
            key={i}
            title={countries.name}
            capital={countries.capital}
            region={countries.region}
            population={countries.population}
            image={countries.flags.png}
          />
        ))}
      </div>
    </>
  );
}

export default App;
