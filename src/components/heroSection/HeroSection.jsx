import React from "react";
import styled from "styled-components";
import Button from "../Button";

const HeroSection = (data) => {
  const Wrapper = styled.section`
    padding: 100px 0;

    .col {
      width: 50%;
    }

    .col-left {
      p {
        max-width: 70%;
      }

      .intro-p {
        color: #263238;
      }
    }

    .col-right{
      img{
        width: 100%;
      }
    }
  `;

  
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row fx fx-ac">
            <div className="col col-left hero-content">
              <p className="intro-p">This is me:</p>
              <h1>{data.heroHeading}</h1>
              <p>
                {data.heroDesc}
              </p>
              <Button to="/about" text="Hire Me" />
            </div>
            <div className="col col-right hero-img">
              <img src={data.heroImage} alt="Banner Image" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HeroSection;
