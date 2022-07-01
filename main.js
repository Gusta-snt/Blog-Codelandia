import "./src/global/reset.css"
import "./src/global/colors.css"
import CardArticle from "./src/components/CardArticle";

const $htmlCardArticle = CardArticle("Tittle", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus ipsa provident nobis, animi quos illum illo optio eius, molestias tempore incidunt expedita dolor dignissimos! Nesciunt ipsa eaque deleniti cumque!")
const $app = document.getElementById("app")

$app.insertAdjacentHTML("beforeend",$htmlCardArticle);
