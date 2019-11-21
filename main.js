const DataScienceAcronyms = [
  {
    id: 1,
    title: "LINEI",
    content_one: "L: Linear relationship between X and Y",
    content_two: "I: Independence of residuals (errors)",
    content_three: "N: Normality of residuals (errors)",
    content_four: "E: Equality of variances",
    content_five: "I: Independence of observations",
    content_six: "",
    content_seven: "",
    content_eight: "",
    content_nine: "",
    content_ten: ""
  },
  {
    id: 2,
    title: "LINEI",
    content_one: "L: Linear relationship between X and Y",
    content_two: "I: Independence of residuals (errors)",
    content_three: "N: Normality of residuals (errors)",
    content_four: "E: Equality of variances",
    content_five: "I: Independence of observations",
    content_six: "",
    content_seven: "",
    content_eight: "",
    content_nine: "",
    content_ten: ""
  },
  {
    id: 3,
    title: "LINEI",
    content_one: "L: Linear relationship between X and Y",
    content_two: "I: Independence of residuals (errors)",
    content_three: "N: Normality of residuals (errors)",
    content_four: "E: Equality of variances",
    content_five: "I: Independence of observations",
    content_six: "",
    content_seven: "",
    content_eight: "",
    content_nine: "",
    content_ten: ""
  },
];

const sectionOutput = document.querySelector(".container");

let dataScienceList = () => {
  sectionOutput.innerHTML = ``;

  for (let i = 0; i < DataScienceAcronyms.length; i++) {
    let currentObj = DataScienceAcronyms[i];

    let cardDiv = document.createElement('div');
    cardDiv.class = `card`;
    let faceOne = document.createElement('div');
    faceOne.class = `face face1`;
    let infoOne = document.createElement('div');
    infoOne.class = `content info1`;

    let line;
    console.log(currentObj)
    for (let j = 2; j < 12; j++) {

      if (currentObj[j] !== '') {
        line = document.createElement('p');
        line.textContent = `${currentObj[j]}`
      }
    }

    let faceTwo = document.createElement('div');
    faceTwo.class = `face face2 info2`;
    let title = document.createElement('h2');
    title.textContent = `${DataScienceAcronyms.title}`

    infoOne.append(line);
    faceOne.append(infoOne);
    faceTwo.append(title);
    cardDiv.append(faceOne);
    cardDiv.append(faceTwo);
    sectionOutput.append(cardDiv);
  }
};

dataScienceList()
// $(document).ready();

// $(window).on("load", dataScienceList())

// window.onload = () => {
//   dataScienceList()
// }