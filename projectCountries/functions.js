const countries = {
    austria: { capital: "Vienna", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
    belgium: { capital: "Brussels", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
    bulgaria: { capital: "Sofia", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
    croatia: { capital: "Zagreb", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
    cyprus: { capital: "Nicosia", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
    czechia: { capital: "Prague", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
    denmark: { capital: "Copenhagen", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
    estonia: { capital: "Tallinn", flag: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
    finland: { capital: "Helsinki", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
    france: { capital: "Paris", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
    germany: { capital: "Berlin", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
    greece: { capital: "Athens", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
    hungary: { capital: "Budapest", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
    ireland: { capital: "Dublin", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
    italy: { capital: "Rome", flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" },
    latvia: { capital: "Riga", flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
    lithuania: { capital: "Vilnius", flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
    luxembourg: { capital: "Luxembourg", flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
    malta: { capital: "Valletta", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
    netherlands: { capital: "Amsterdam", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    poland: { capital: "Warsaw", flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" },
    portugal: { capital: "Lisbon", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    romania: { capital: "Bucharest", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
    slovakia: { capital: "Bratislava", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
    slovenia: { capital: "Ljubljana", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
    spain: { capital: "Madrid", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
    sweden: { capital: "Stockholm", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" }
};

const input = document.getElementById("country");
const div = document.getElementById("countryInfo");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const countryName = input.value.trim().toLowerCase();

    div.innerHTML = "";

    const country = countries[countryName];

    if (!country) {
        const p = document.createElement("p");
        p.textContent = "You entered an incorrect country name. Please try again.";
        div.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.textContent = `Capital: ${country.capital}`;
        const img = document.createElement("img");
        img.src = country.flag;
        img.alt = `${countryName} flag`;

        div.appendChild(p);
        div.appendChild(img);
    }
    
    input.value = "";
});

function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById("dateTime").textContent = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();
