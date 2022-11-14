import "./default.scss"
import Loading from "./compenent/loading";

const app = document.getElementById('app');

let content = "";
content += Loading();
app.innerHTML = content;