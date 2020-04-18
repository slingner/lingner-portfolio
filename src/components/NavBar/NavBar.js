import React, { useState } from 'react';
// import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import Burger from './Burger';
import { NavWrapper, MobileButton } from './NavBar.style';
// import scottlogo from "./Assets/scottlogo.png";

function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleTrueFalse = () => setMobileNav(!mobileNav);

  return (
    <NavWrapper open={mobileNav}>
      <div className="mobile" onClick={toggleTrueFalse}>
        <MobileButton type="button" onClick={toggleTrueFalse}>
          <Burger open={mobileNav} />
        </MobileButton>
        {/* <DesktopNavBar /> */}
      </div>

      {mobileNav ? (
        <MobileNavBar
          toggleNav={toggleTrueFalse}
          displayMobileNavBar={mobileNav}
        />
      ) : null}
    </NavWrapper>
  );
}

export default NavBar;
