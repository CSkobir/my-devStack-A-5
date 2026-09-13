import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto border border-gray-100 p-4 rounded-xl">
        <div className="my-10">
          <img src={Logo} alt="" className="mb-4" />
          <p className="my-4">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <span className="mr-4">GitHub</span>
          <span className="m-4">Twitter</span>
          <span className="ml-4">Linkedin</span>
        </div>
        <div className="my-10">
          <h1 className="my-4">PRODUCT</h1>
          <h3 className="my-4">Home</h3>
          <h3 className="my-4">Technologies</h3>
          <h3>Projects</h3>
        </div>
        <div className="my-10">
          <h1 className="my-4">COMPANY</h1>
          <h3 className="my-4">About</h3>
          <h3 className="my-4">Contact</h3>
          <h3>Careers</h3>
        </div>
        <div className="my-10">
          <h1 className="my-4">LEGAL</h1>
          <h3 className="my-4">Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3></h3>
        </div>
      </div>
      <div className="flex justify-between container mx-auto m-10">
        <div>&copy; 2026 Dev Stack. All rights reserved.</div>
        <div>
            <span>Privacy</span>
            <span>Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
