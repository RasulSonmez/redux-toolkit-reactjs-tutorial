import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setDarkMode } from "../../features/SiteSlice";

function SiteSettings() {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["tr", "en"];

  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <h6>Language And Theme Two Settings</h6>
      {languages.map((lang, index) => (
        <button
          className={
            lang === language
              ? "btn btn-sm btn-warning active-lang me-3 "
              : "btn btn-sm btn-warning me-3"
          }
          key={index}
          onClick={() => handleLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export default SiteSettings;
