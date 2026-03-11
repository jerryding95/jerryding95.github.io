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

    // fetch JSON data and populate lists
    function populateFromJson(url, listElem, itemClass) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(entry => {
                    const li = document.createElement("li");
                    li.className = itemClass;
                    li.textContent = entry.title;
                    listElem.appendChild(li);
                });
                filterList(projectSearch, projectList, "project-item");
                filterList(pubSearch, pubList, "pub-item");
            })
            .catch(err => console.error("Error loading JSON:", err));
    }

    if (projectSearch && projectList) {
        populateFromJson('data/projects.json', projectList, 'project-item');
    }

    if (pubSearch && pubList) {
        populateFromJson('data/publications.json', pubList, 'pub-item');
    }
});
