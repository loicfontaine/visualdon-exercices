import { select } from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!

select("body").append("div").attr("id", "monSvg");

const svg = select("#monSvg")
  .append("svg")
  .attr("width", "500")
  .attr("height", "500");

const groupe1 = svg.append("g");
const groupe2 = svg.append("g");
const groupe3 = svg.append("g");

groupe1.append("circle").attr("cx", "50").attr("cy", "50").attr("r", "40");
groupe2.append("circle").attr("cx", "150").attr("cy", "150").attr("r", "40");
groupe3.append("circle").attr("cx", "250").attr("cy", "250").attr("r", "40");

//attributs
groupe2.select("circle").attr("fill", "red");
groupe1.select("circle").attr("cx", "100");
groupe3.select("circle").attr("cx", "300");

//texte
groupe1
  .append("text")
  .attr("class", "monTexte")
  .attr("x", "100")
  .attr("y", "105")
  .text("Cercle 1");

groupe2
  .append("text")
  .attr("class", "monTexte")
  .attr("x", "150")
  .attr("y", "205")
  .text("Cercle 2");

groupe3
  .append("text")
  .attr("class", "monTexte")
  .attr("x", "300")
  .attr("y", "305")
  .text("Cercle 3");

//click

groupe3.select("circle").on("click", function () {
  svg.selectAll("circle").attr("cx", "300");
  svg.selectAll("text").attr("x", "300");
});

//data

const data = [20, 5, 25, 8, 15];

const rectangles = select("#monSvg")
  .append("svg")
  .attr("width", "500")
  .attr("height", "500")
  .attr("id", "svgrectangle");

/*
const data = ['Pierre', 'Charlotte', 'Jacques'];

select("#ma-div")
    .append("ul")
    .selectAll("li")
    .data(data)
    .join(enter => enter
                    .append("li")
                    .text((d, i) => 'Valeur: ' + d + ', Index: ' + i))
    .style("color", 'green')
*/

rectangles
  .selectAll("rect")
  .data(data)
  .join((enter) =>
    enter
      .append("g")
      .append("rect")
      .attr("width", "20")
      .attr("height", (d) => d)
      .attr("x", (d, i) => i * 30)
      .attr("y", (d) => 500 - d)
  );
