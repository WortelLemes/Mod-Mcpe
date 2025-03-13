function searchMod() {
    let input = document.getElementById("searchBar").value.toLowerCase().replace(/\s+/g, "");
    let cards = document.getElementsByClassName("mod-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getAttribute("data-title").toLowerCase();
        let titleNoSpace = title.replace(/\s+/g, "");

        if (title.includes(input) || titleNoSpace.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}