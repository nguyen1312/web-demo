import React, { useState } from 'react';
import { Collapse, 
         Navbar, 
         NavbarToggler, 
         NavbarBrand, 
         Nav, NavItem, 
         NavLink 
       } from 'reactstrap';
import { LINK_COMMUNITY, 
         LINK_DOCUMENTATION, 
         VISUAL_QUESTION_ANSWERING, 
         COMMUNITY, 
         DOCUMENTATION
       } from './constant'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">{VISUAL_QUESTION_ANSWERING}</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href={LINK_COMMUNITY} >{COMMUNITY}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={LINK_DOCUMENTATION}>{DOCUMENTATION}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;