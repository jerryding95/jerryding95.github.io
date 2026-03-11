document.addEventListener("DOMContentLoaded", function() {
    const projectSearch = document.getElementById("project-search");
    const projectList = document.getElementById("project-list");
    const pubSearch = document.getElementById("pub-search");
    const pubList = document.getElementById("pub-list");

    function filterList(inputElem, listElem, itemClass) {
        inputElem.addEventListener("input", () => {
            const filter = inputElem.value.toLowerCase();
            const items = listElem.getElementsByClassName(itemClass);
            Array.from(items).forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.indexOf(filter) !== -1 ? "" : "none";
            });
        });
    }

    if (projectSearch && projectList) {
        filterList(projectSearch, projectList, "project-item");
    }

    if (pubSearch && pubList) {
        filterList(pubSearch, pubList, "pub-item");
    }
});
