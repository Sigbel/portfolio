const filter_projects = (filterType) => {
  const filteredDivs = document.querySelectorAll(
    `div[datatype="${filterType}"]`
  );

  const filteredDivsArray = Array.from(filteredDivs);

  if (filterType != "showall") {
    document.querySelectorAll("div[datatype]").forEach((div) => {
      if (!filteredDivsArray.includes(div)) {
        div.style.display = "none";
      } else {
        div.style.display = "flex";
      }
    });
  } else {
    document.querySelectorAll("div[datatype]").forEach((div) => {
      div.style.display = "flex";
    });
  }
};

export default filter_projects;
