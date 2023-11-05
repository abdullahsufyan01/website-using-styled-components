import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  console.log(navLinks);
  return (
    <>
      <nav>
        <div className="menu-button">
          <NavLinkWrapper className="fx fx-ac">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </NavLinkWrapper>
        </div>
      </nav>
    </>
  );
};

const NavLinkWrapper = styled.ul`
  column-gap: 15px;

  li {
    a {
      &:hover,
      &:active {
        color: #27DEBF;
        transition: all ease-in-out 0.5s;
        /* background: #27DEBF;
        box-shadow: 0 0 5px #27DEBF, 0 0 25px #27DEBF, 0 0 50px #27DEBF,
          0 0 100px #27DEBF; */
      }
    }
  }
`;
export default Navbar;
