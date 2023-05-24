import SearchIcon from '@mui/icons-material/Search';

export const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter-search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a country..."
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <div className="filter-select">
        <select value={props.selected} onChange={props.handleSelected}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
