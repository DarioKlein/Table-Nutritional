import loveButton from "/Lovebutton.png"
import backButton from "/Backbutton.png"
import imgPizza from "../assets/image.svg"

function createValuesStructure() {
  const values1 = document.createElement("div")
  values1.className = "barValues"

  const values2 = document.createElement("div")
  values2.className = "barValues"

  const values3 = document.createElement("div")
  values3.className = "barValues"

  const values4 = document.createElement("div")
  values4.className = "barValues"

  const values5 = document.createElement("div")
  values5.className = "barValues"

  const values6 = document.createElement("div")
  values6.className = "barValues"

  const divValues = document.createElement("div")
  divValues.className = "divValues"
  divValues.append(values1, values2, values3, values4, values5, values6)

  return divValues
}

function createValuesStructure2() {
  const values1 = document.createElement("div")
  values1.className = "barValues2"

  const values2 = document.createElement("div")
  values2.className = "barValues2"

  const values3 = document.createElement("div")
  values3.className = "barValues2"

  const values4 = document.createElement("div")
  values4.className = "barValues2"

  const values5 = document.createElement("div")
  values5.className = "barValues2"

  const values6 = document.createElement("div")
  values6.className = "barValues2"

  const divValues = document.createElement("div")
  divValues.className = "divValues"
  divValues.append(values1, values2, values3, values4, values5, values6)

  return divValues
}

const foodVisualization = () => {
  const main = document.createElement("main")

  const buttonBack = document.createElement("button")
  const imgButtonBack = document.createElement("img")
  imgButtonBack.src = backButton
  buttonBack.appendChild(imgButtonBack)

  const buttonLove = document.createElement("button")
  const imgButtonLove = document.createElement("img")
  imgButtonLove.src = loveButton
  buttonLove.appendChild(imgButtonLove)

  const header = document.createElement("header")
  header.append(buttonBack, buttonLove)

  const section = document.createElement("section")

  const pizzaImage = document.createElement("img")
  pizzaImage.setAttribute("id", "imgPizza")
  pizzaImage.src = imgPizza

  const container = document.createElement("div")
  container.className = "container"

  const h1 = document.createElement("h1")
  h1.innerText = "Salada variada"

  const information = document.createElement("div")
  information.className = "information"

  const energyDiv = document.createElement("div")
  energyDiv.className = "infomationsContainers"
  const energy = document.createElement("h2")
  energy.textContent = "Energia"
  energyDiv.appendChild(energy)

  const portionDiv = document.createElement("div")
  portionDiv.className = "infomationsContainers"
  const portion = document.createElement("h2")
  portion.textContent = "Porção total"
  portionDiv.appendChild(portion)

  const infoEnergy = document.createElement("p")
  infoEnergy.innerText = "221,15 kcal"
  energyDiv.appendChild(infoEnergy)

  const infoPortion = document.createElement("p")
  infoPortion.innerText = "240 g"
  portionDiv.appendChild(infoPortion)

  const graph = document.createElement("div")
  graph.className = "graph"

  const proteins = document.createElement("div")

  const titleProteins = document.createElement("h2")
  titleProteins.textContent = "Proteínas"

  const textProteins = document.createElement("p")
  textProteins.textContent = "15,13 g"

  titleProteins.append(textProteins)

  proteins.append(titleProteins, createValuesStructure())

  const carbohydrates = document.createElement("div")

  const titleCarbohydrates = document.createElement("h2")
  titleCarbohydrates.textContent = "Carboidratos"

  const textCarbohydrates = document.createElement("p")
  textCarbohydrates.textContent = "18,40 g"

  titleCarbohydrates.appendChild(textCarbohydrates)

  carbohydrates.append(titleCarbohydrates, createValuesStructure())

  const sugar = document.createElement("div")

  const titleSugar = document.createElement("h2")
  titleSugar.textContent = "Açúcar"

  const textSugar = document.createElement("p")
  textSugar.textContent = "4,88 g"

  titleSugar.appendChild(textSugar)

  sugar.append(titleSugar, createValuesStructure2())

  const fats = document.createElement("div")

  const titleFats = document.createElement("h2")
  titleFats.textContent = "Gorduras"

  const textFats = document.createElement("p")
  textFats.textContent = "5,18 g"

  titleFats.appendChild(textFats)

  fats.append(titleFats, createValuesStructure2())

  graph.append(proteins, carbohydrates, sugar, fats)

  information.append(energyDiv, portionDiv)

  const detailsButton = document.createElement("button")
  detailsButton.className = "details"
  detailsButton.textContent = "Mais Detalhes"

  container.append(h1, information, graph, detailsButton)
  section.append(pizzaImage, container)

  main.append(header, section)

  return main
}

export default foodVisualization
