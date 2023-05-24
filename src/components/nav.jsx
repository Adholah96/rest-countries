import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useState } from 'react';

const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav id="nav">
      <div className="nav-text">Where in the World</div>
      <div className="nav-themeswitcher">
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="nav-theme-icon"
        >
          {darkMode ? (
            <Brightness2Icon className="icon-theme" />
          ) : (
            <Brightness5Icon className="icon-theme" />
          )}
        </div>
        <div className="nav-theme-text">Night</div>
      </div>
    </nav>
  );
};

export default Nav;
