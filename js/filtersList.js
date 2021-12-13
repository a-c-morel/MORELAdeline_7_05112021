class FiltersList {
    constructor(button, listContainer, filters, className) {
        this.button = button; //exemple : ingredientFiltersButton
        this.listContainer = listContainer; //exemple : ingredientFiltersList
        this.filters = filters;
        this.className = className;
    }
//créer méthode qui regarde s'il y a du contenu et qui le clear
    display() {
        for (let filter of this.filters) {
            const filterLi = document.createElement("li");
            filterLi.classList.add(this.className);
            filterLi.classList.add("filter-element")
            filterLi.classList.add("text-white");
            filterLi.classList.add("col-4");
            filterLi.innerHTML = `${filter}`;
            //filterLi.style.display = "none"; //temporary (for tests)
            this.listContainer.appendChild(filterLi);
        }
    }
}

