import React, { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Burger from "./Burger";
import { NavWrapper, Logo, MobileButton, ScottLogo } from "./NavBar.style";
import scottlogo from "./Assets/scottlogo.png";

function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleTrueFalse = () => setMobileNav(!mobileNav);

  return (
    <NavWrapper>
      {/* <Logo to="/">
        <ScottLogo img src={scottlogo} alt="scott-lingner-logo" />
        SCOTT LINGNER
      </Logo> */}

      {/* <div className="mobile"> */}
      <DesktopNavBar />

      <MobileButton type="button" onClick={toggleTrueFalse}>
        <Burger open={mobileNav} />
      </MobileButton>
      {/* </div> */}

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
