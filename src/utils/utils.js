export const langMap = {
  pickLang: {
    en: "en",
    tr: "tr",
  },
  title: {
    en: "React Tutorials",
    tr: "React Alıştırmalar",
  },
  description: {
    en: "You can do this, I believe in you",
    tr: "Bunu yapabilirsin, İnanıyorum sana",
  },
};

export const getText = (key) => langMap[key][localStorage["language"]];
