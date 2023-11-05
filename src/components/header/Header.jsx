import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <MainHeader>
        <div className="container-full">
          <div className="fx fx-ac fx-jb">
            <div className="logo">
              <NavLink to={'/'}>
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="nav-bar">
              <Navbar />
            </div>
          </div>
        </div>
      </MainHeader>
    </>
  );
};

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.color.headerFooterBg};
  padding: 25px 0;

  .container-full {
    width: 96%;
    margin: 0 auto;
  }
  .logo img {
    max-width: 190px;
    height: auto;
  }
`;

export default Header;
