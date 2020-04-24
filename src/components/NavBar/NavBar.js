import React, { useState } from 'react';
import MobileNavBar from './MobileNavBar';
import Burger from './Burger';
import { NavWrapper, MobileButton } from './NavBar.style';

function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleTrueFalse = () => setMobileNav(!mobileNav);

  return (
    <header>
      <NavWrapper open={mobileNav}>
        <div className="mobile" onClick={toggleTrueFalse}>
          <MobileButton type="button" onClick={toggleTrueFalse}>
            <Burger aria-label="Burger Nav Menu" open={mobileNav} />
          </MobileButton>
        </div>

        {mobileNav ? (
          <MobileNavBar
            toggleNav={toggleTrueFalse}
            displayMobileNavBar={mobileNav}
          />
        ) : null}
      </NavWrapper>
    </header>
  );
}

export default NavBar;
