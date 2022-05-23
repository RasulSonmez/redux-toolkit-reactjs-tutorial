import SiteSettings from "../SiteSettings";
import { getText } from "../../utils/utils";

function Header() {
  return (
    <main>
      <h2>{getText("title")}</h2>
      <p>{getText("description")}</p>
      <br />

      <div className="mt-1">
        <SiteSettings />
      </div>
    </main>
  );
}

export default Header;
