const cities = [];

$.getJSON("http://localhost:9999/cityList.json", function(cities){

    
    console.log(cities[101]);

    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName},</span>
                </li>
                `;
        }).join('');
        suggestions.innerHTML=html;
    }
    
    function findMatches (wordToMatch, cities) {
        if(wordToMatch.length > 4) {
            return cities.filter(place => {
                //this is where we figure out a match
                const regex = new RegExp(wordToMatch, 'gi');
                return place.name.match(regex);
            });
        }
    }
    
    
    
    const searchInput = document.querySelector(".search");
    const suggestions = document.querySelector(".suggestions");
    
    searchInput.addEventListener("change", displayMatches);
    searchInput.addEventListener("keyup", displayMatches);
});



