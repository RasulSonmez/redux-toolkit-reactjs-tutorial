import { useSelector } from "react-redux";
import SiteSettings from "../SiteSettings";

function Header() {
  const { dark, language } = useSelector((state) => state.site);

  return (
    <main>
      mevcut dil {language}
      <br />
      dark mod ={dark ? "evet " : "hayır "}
      <div className="mt-5">
        <SiteSettings />
      </div>
    </main>
  );
}

export default Header;
