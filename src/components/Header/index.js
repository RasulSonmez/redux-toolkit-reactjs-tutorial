import React from "react";
import { useSelector } from "react-redux";
import SiteSettings from "../SiteSettings";

function Header() {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <main>
      <h2>Redux Toolkit Tutorial</h2>
      <p>You can do this, I believe in you.</p>
      dark mod ={dark ? "evet " : "hayır "}
      <br />
      mevcut dil {language}
      <div className="mt-5">
        <SiteSettings />
      </div>
    </main>
  );
}

export default Header;
