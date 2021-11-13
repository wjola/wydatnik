const categoriesData = [
  {
    name: "groceries",
    displayedName: "Spożywcze",
    colorClass: "blue",
    color: "#0185FF",
  },
  {
    name: "alcohol",
    displayedName: "Alkohol",
    colorClass: "navy",
    color: "#3139a8",
  },
  {
    name: "drugstore",
    displayedName: "Chemia",
    colorClass: "turquise",
    color: "#04CABE",
  },
  {
    name: "home",
    displayedName: "Dom",
    colorClass: "yellow",
    color: "#FFC701",
  },
  {
    name: "gifts",
    displayedName: "Prezenty",
    colorClass: "pink",
    color: "#a03b9b",
  },
  {
    name: "goouts",
    displayedName: "Wyjścia",
    colorClass: "red",
    color: "#9b2d3b",
  },
  {
    name: "car",
    displayedName: "Samochód",
    colorClass: "orange",
    color: "#936032",
  },
  {
    name: "flowers",
    displayedName: "Kwiaty",
    colorClass: "green",
    color: "#048339",
  },
];

export const getColorForCategory = (categoryName) => {
  return categoriesData.find((category) => {
    if (category.name === categoryName) {
      return category;
    }
  }).color;
};

export const getColorClassForCategory = (categoryName) => {
  return categoriesData.find((category) => {
    if (category.name === categoryName) {
      return category;
    }
  }).colorClass;
};

export const getDisplayedNameForCategory = (categoryName) => {
  return categoriesData.find((category) => {
    if (category.name === categoryName) {
      return category;
    }
  }).displayedName;
};

export const getCategories = () => {
  return categoriesData.map((category) => category.name);
};
