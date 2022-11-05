import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage =
    "We couldn't find any recipes containing your query. Please try another one!";
  _successMessage = "";

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join("");
  }
}

export default new ResultsView();
