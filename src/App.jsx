import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const App = () => { 
  const theme = {
    color:{
      bodyBg:'#0C1017',
      headerFooterBg:'#111920',
      heading:'#178573',
      text:'#B9C1CD',
      navLink:'#6c6c6c',
    },
    media:{
      mobile:'768px',
      tab:'998px',
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
