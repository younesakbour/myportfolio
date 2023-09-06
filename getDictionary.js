const dictionaries = {
    en: () => import("./dictionaries/en.json").then(r => r.default),
    fr: () => import("./dictionaries/fr.json").then(r => r.default)
  }
  
  export const getDictionary = (lng) => {
    return dictionaries[lng]();
  }