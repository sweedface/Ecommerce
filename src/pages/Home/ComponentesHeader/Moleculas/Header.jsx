import React from 'react';
import Language from '../Atomos/Language';
{/*import Currency from '../Atomos/Currency';
import Title1 from '../Atomos/Title1';
import LogIn from '../Atomos/LogIn';
import Wishlist from '../Atomos/Wishlist';
import Cart from '../Atomos/Cart'; */}
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="horizontal-line">
        <Language />
       {/* <Currency />
      </div>
      <Title1 /> */}
      <div className="header-right">
        {/* <LogIn />
        <Wishlist />
        <Cart  */}
      </div>
      </div>
    </header>
  );
}

export default Header;