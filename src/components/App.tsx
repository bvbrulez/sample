import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App';
import Login from './login/Login';

function App() {
  const [token, setToken] = useState();

  /*
  if (!token) {
    return <Login />;
  }
  */

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Pokerjunx on tour</h1>
      <nav
        style={{
          marginLeft: '5px',
          marginRight: '5px',
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Home</Link> | <Link to='/tour2023'>Tour 2023</Link> |{' '}
        <Link to={'/colfosco2023'}>Colfosco 2023</Link> | <Link to='/kontakt'>Kontakt</Link> |{' '}
        <Link to='/invoice'>Invoices</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
