import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <MDBFooter bgColor="light" className="text-center">
      <div className="text-center fText">
        @ {currentYear} ThankYouForYourTime
      </div>
    </MDBFooter>
  );
}

export default Footer;
