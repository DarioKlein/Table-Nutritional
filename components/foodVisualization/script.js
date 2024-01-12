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
  detailsButton.addEventListener("click", () => {
    specialDetails.style.display = "flex"
    document.querySelector("header").style.filter = "blur(0.25rem)"
    document.querySelector("section").style.filter = "blur(0.25rem)"
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolar suave
    })
  })

  container.append(h1, information, graph, detailsButton)
  section.append(pizzaImage, container)

  const specialDetails = document.createElement("div")
  specialDetails.className = "specialDetails"
  specialDetails.addEventListener("click", () => {
    specialDetails.style.display = "none"
    document.querySelector("header").style.filter = "blur(0)"
    document.querySelector("section").style.filter = "blur(0)"
  })
  const detailsSection = document.createElement("div")
  detailsSection.className = "detailsSection"
  const lineDetails = document.createElement("div")
  lineDetails.id = "lineDetails"
  const headerTextDetails = document.createElement("h2")
  headerTextDetails.textContent = "Mais Detalhes"

  const divDetailsTexts = document.createElement("div")
  divDetailsTexts.className = "divDetailsTexts"
  const ulDetails = document.createElement("ul")

  const energyUlDetails = document.createElement("li")
  const p1 = document.createElement("p")
  p1.textContent = "Energia"
  const c1 = document.createElement("span")
  c1.textContent = "221,15 kcal"
  energyUlDetails.append(p1, c1)

  const protainDetails = document.createElement("li")
  const p2 = document.createElement("p")
  p2.textContent = "Proteínas"
  const c2 = document.createElement("span")
  c2.textContent = "15,13 g"
  protainDetails.append(p2, c2)

  const carboDetails = document.createElement("li")
  const p3 = document.createElement("p")
  p3.textContent = "Carboidratos"
  const c3 = document.createElement("span")
  c3.textContent = "18,40 g"
  carboDetails.append(p3, c3)

  const ulDetailsInUl = document.createElement("ul")
  const fibraDetails = document.createElement("li")
  const p4 = document.createElement("p")
  p4.textContent = "Fibra Alimentar"
  const c4 = document.createElement("span")
  c4.textContent = "5,83 g"
  fibraDetails.append(p4, c4)

  const acDetails = document.createElement("li")
  const p5 = document.createElement("p")
  p5.textContent = "Açúcar"
  const c5 = document.createElement("span")
  c5.textContent = "4,88 g"
  acDetails.append(p5, c5)

  ulDetailsInUl.append(fibraDetails, acDetails)

  const gordTotalDetails = document.createElement("li")
  const p6 = document.createElement("p")
  p6.textContent = "Gorduras Totais"
  const c6 = document.createElement("span")
  c6.textContent = "5,18 g"
  gordTotalDetails.append(p6, c6)

  const ulDetailsInUl2 = document.createElement("ul")
  const gordSatuDetails = document.createElement("li")
  const p7 = document.createElement("p")
  p7.textContent = "Gorduras Saturadas"
  const c7 = document.createElement("span")
  c7.textContent = "0,86 g"
  gordSatuDetails.append(p7, c7)

  const gordTransDetails = document.createElement("li")
  const p8 = document.createElement("p")
  p8.textContent = "Gorduras Trans"
  const c8 = document.createElement("span")
  c8.textContent = "0 g"
  gordTransDetails.append(p8, c8)
  ulDetailsInUl2.append(gordSatuDetails, gordTransDetails)

  const colestDetails = document.createElement("li")
  const p9 = document.createElement("p")
  p9.textContent = "Colesterol"
  const c9 = document.createElement("span")
  c9.textContent = "0 mg"
  colestDetails.append(p9, c9)

  const sodDetails = document.createElement("li")
  const p10 = document.createElement("p")
  p10.textContent = "Sódio"
  const c10 = document.createElement("span")
  c10.textContent = "243,03 mg"
  sodDetails.append(p10, c10)

  const potDetails = document.createElement("li")
  const p11 = document.createElement("p")
  p11.textContent = "Potássio"
  const c11 = document.createElement("span")
  c11.textContent = "291,85 mg"
  potDetails.append(p11, c11)

  const calcDetails = document.createElement("li")
  const p12 = document.createElement("p")
  p12.textContent = "Cálcio"
  const c12 = document.createElement("span")
  c12.textContent = "49,02 mg"
  calcDetails.append(p12, c12)

  const ironDetails = document.createElement("li")
  const p13 = document.createElement("p")
  p13.textContent = "Ferro"
  const c13 = document.createElement("span")
  c13.textContent = "2,91 mg"
  ironDetails.append(p13, c13)

  const magnDetails = document.createElement("li")
  const p14 = document.createElement("p")
  p14.textContent = "Magnésio"
  const c14 = document.createElement("span")
  c14.textContent = "48,23 mg"
  magnDetails.append(p14, c14)

  const viccDetails = document.createElement("li")
  const p15 = document.createElement("p")
  p15.textContent = "Vitamina C"
  const c15 = document.createElement("span")
  c15.textContent = "29,49 mg"
  viccDetails.append(p15, c15)

  const vicdDetails = document.createElement("li")
  const p16 = document.createElement("p")
  p16.textContent = "Vitamina D"
  const c16 = document.createElement("span")
  c16.textContent = "24,88 mg"
  vicdDetails.append(p16, c16)

  const vic86Details = document.createElement("li")
  const p17 = document.createElement("p")
  p17.textContent = "Vitamina 86"
  const c17 = document.createElement("span")
  c17.textContent = "32,40 mg"
  vic86Details.append(p17, c17)

  divDetailsTexts.appendChild(ulDetails)
  ulDetails.append(
    energyUlDetails,
    protainDetails,
    carboDetails,
    ulDetailsInUl,
    gordTotalDetails,
    ulDetailsInUl2,
    colestDetails,
    sodDetails,
    potDetails,
    calcDetails,
    ironDetails,
    magnDetails,
    viccDetails,
    vicdDetails,
    vic86Details
  )

  detailsSection.appendChild(lineDetails)
  detailsSection.appendChild(headerTextDetails)
  detailsSection.appendChild(divDetailsTexts)
  specialDetails.appendChild(detailsSection)

  main.append(specialDetails, header, section)

  return main
}

export default foodVisualization
