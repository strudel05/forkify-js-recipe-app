import View from "./view.js";

class SearchView {
  _parentEl = document.querySelector(".search");
  _buttonEl = document.querySelector(".search__btn");

  getQuery(state) {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
