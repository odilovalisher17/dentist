import React from "react";
import "./Marketing.css";
import MarketingHeader from "./elements/MarketingHeader";
import { Container } from "react-bootstrap";
import MarketingBrand from "./elements/MarketingBrand";
import photo1 from "../../../../images/Brends/1.png";

const Marketing = () => {
  return (
    <Container>
      <div className="marketing">
        <MarketingHeader />

        <div className="marketing-brands">
          {[
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
            photo1,
          ].map((el) => (
            <div className="marketing-brand">
              <MarketingBrand logo={el} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Marketing;
