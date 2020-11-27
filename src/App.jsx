import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams.jsx';
import Details from './Details.jsx';
import ThemeContext from './ThemeContext.jsx';

const App = () => {
  const themeHook = useState('peru');
return (
  <React.StrictMode>
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" /> 
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  </React.StrictMode>
  )
};

render(<App/>, document.getElementById("root"));
