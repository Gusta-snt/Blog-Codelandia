import "./src/global/reset.css"
import "./src/global/colors.css"
import DocumentHeader from "./src/components/DocumentHeader";
import DocumentMain from "./src/components/DocumentMain";

const $htmlDocumentMain = DocumentMain()
const $htmlDocumentHeader = DocumentHeader();
const $app = document.getElementById("app")

$app.insertAdjacentHTML("beforeend",$htmlDocumentHeader + $htmlDocumentMain);
