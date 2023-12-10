import "./style.css"
import foodVisualization from "./components/foodVisualization/script"

const visualizationElement = foodVisualization()

document.querySelector("#app").innerHTML = ""
document.querySelector("#app").appendChild(visualizationElement)
