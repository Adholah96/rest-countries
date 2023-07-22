import Nav from '../components/nav';
import { Filter } from '../components/filter';
import { Country } from '../components/country';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all', {method:'GET'}).then(res => res.json()).then(data => setCountries(data)).catch(e => console.log(e))
  }, [])


  return <>
    <Nav />
    <Filter />
    <div className="country-holder">
      {countries.map((country, i) => (
        <Country
          key={i}
          title={country.name.official}
          capital={country.capital}
          region={country.region}
          population={country.population}
          image={country.flags.png}
          onClick={()=>{
            navigate(`/${country.name.official}`)
          }}
        />
      ))}
    </div>
  </>


}

export default Home;
