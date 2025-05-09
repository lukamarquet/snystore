const marqueeContent = document.getElementById('marquee-content');
if (marqueeContent) {
    const originalContent = marqueeContent.innerHTML;
    while (marqueeContent.scrollWidth < marqueeContent.parentElement.offsetWidth * 3) {
        marqueeContent.innerHTML += originalContent;
    }
}
let taille = "non déterminée";
let numberpullover = 0;
let numbertshirt = 0;
let numberpantallon = 0;
let numberchaussure = 0;
let total = 0;
const buttonxs = document.getElementById("taillebuttonxs");
const buttonm = document.getElementById("taillebuttonm");
const buttons = document.getElementById("taillebuttons");
const buttonl = document.getElementById("taillebuttonl");
const buttonxl = document.getElementById("taillebuttonxl");
const searchInput = document.getElementById("searchInput");
console.log(buttonxs);
const isSubPage = location.pathname.includes("/pages/");
const prefix = isSubPage ? "../" : "";
const articles = [
    {"titre": "Nike Air Max", "img": prefix +"img/air_max.jpg","description": "Chaussures légères et confortables.", "prix": 60, "solde": "120 €", "dispo": true, "type": "chaussure"  },
    {"titre": "Adidas Stan Smith", "img": prefix +"img/stan.jpg", "description": "Classiques indémodables.", "prix": 95, "solde": undefined, "dispo": false, "type": "chaussure"  },
    {"titre": "Super Sneakers", "img": prefix +"img/Super_Sneaker.webp", "description": "Les fameuses chaussures qui courent vite.", "prix": 1000000, "solde": undefined, "dispo": true, "type": "chaussure"  },
    {"titre": "Style peaky blinder", "img": prefix +"img/long.png", "description": "conçu pour perdre de l'aura (l'homme est vraiment fou), ⚠️TROP DISPONIBLE !!!⚠️", "prix": 0.00001, "solde": "1 €", "dispo": true, "type": "chaussure"  },
    {"titre": "Pull Minecraft", "img": prefix +"img/minecraft.jpg", "description": "Si t'a 35 ans et que tu joues toujours a minecraft ce pull est fait pour toi !", "prix": 20, "solde": "40 €", "dispo": true, "type": "pullover"  },
    {"titre": "T-shirt tour infernale", "img": prefix +"img/nul_tshirt.jpg", "description": "T'as la ref ? 🤓", "prix": 5, "solde": undefined, "dispo": true, "type": "t-shirt"  },
    {"titre": "Baggy bleu", "img": prefix +"img/baggy.png","description": "Large pour les hunters.", "prix": 47, "solde": undefined, "dispo": true, "type": "pantalon"  },
    {"titre": "Pantalon large noir", "img": prefix +"img/large.png","description": "Large et beau pour pécho.", "prix": 49, "solde": undefined, "dispo": true, "type": "pantalon"  },
    {"titre": "Super baggy noir", "img": prefix +"img/superbaggy.png","description": "Baggy super large.", "prix": 51, "solde": undefined, "dispo": true, "type": "pantalon"  },
    {"titre": "slim bleu troué", "img": prefix +"img/slim.png","description": "Si t'es un vieux gitan qui aime le slim avec des troues et qui est plus a la mode.", "prix": 2, "solde": undefined, "dispo": true, "type": "pantalon"  },
    {"titre": "Botte Timberland Prenium", "img": prefix +"img/Timberland2.jpg","description": "Forcément si t'achète c'est que t'as du gout.", "prix": 210, "solde": undefined, "dispo": true, "type": "chaussure"  },
];

document.addEventListener("click", (event) => {
    if (event.target === buttonxs) {
        buttonxs.classList.add("active");
        buttonm.classList.remove("active");
        buttons.classList.remove("active");
        buttonl.classList.remove("active");
        buttonxl.classList.remove("active");
        taille = "XS";
        console.log(taille);
    } else if (event.target === buttonm) {
        buttonxs.classList.remove("active");
        buttonm.classList.add("active");
        buttons.classList.remove("active");
        buttonl.classList.remove("active");
        buttonxl.classList.remove("active");
        taille = "M";
        console.log(taille);
    } else if (event.target === buttons) {
        buttonxs.classList.remove("active");
        buttonm.classList.remove("active");
        buttons.classList.add("active");
        buttonl.classList.remove("active");
        buttonxl.classList.remove("active");
        taille = "S";
        console.log(taille);
    } else if (event.target === buttonl) {
        buttonxs.classList.remove("active");
        buttonm.classList.remove("active");
        buttons.classList.remove("active");
        buttonl.classList.add("active");
        buttonxl.classList.remove("active");
        taille = "L";
        console.log(taille);
    } else if (event.target === buttonxl) {
        buttonxs.classList.remove("active");
        buttonm.classList.remove("active");
        buttons.classList.remove("active");
        buttonl.classList.remove("active");
        buttonxl.classList.add("active"); 
        taille = "XL";
        console.log(taille);
    }
});

function number(list) {
    const compteur = {};

    list.forEach(article => {
        total = total+1;
        const type = article.type;
        if (!compteur[type]) {
            compteur[type] = 0;
        }
        compteur[type]++;
        
    });

    if (document.getElementById("count-pullover"))
        document.getElementById("count-pullover").textContent = compteur["pullover"] || 0;

    if (document.getElementById("count-t-shirt"))
        document.getElementById("count-t-shirt").textContent = compteur["t-shirt"] || 0;

    if (document.getElementById("count-pantalon"))
        document.getElementById("count-pantalon").textContent = compteur["pantalon"] || 0;

    if (document.getElementById("count-chaussure"))
        document.getElementById("count-chaussure").textContent = compteur["chaussure"] || 0;

    if (document.getElementById("count-total"))
        document.getElementById("count-total").textContent = total || 0;

    console.log(compteur);
    console.log(total);
    console.log("lukamarquet")
}


function loadData(list) {
    let articleList = document.querySelector(".wrapper2"); 
    articleList.innerHTML = "";
    list.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article"); 
        if (article.solde == undefined) {
            div.addEventListener("click", () => {
                openPopup(article.titre, article.prix, article.description, article.img);
            });
            div.innerHTML = `
            <div class="write">
                <img src="${article.img}" alt="Article">
                <h3>${article.titre}</h3>
                <p>${article.prix} €</p>                          
                <p id="${article.dispo ? 'true' : 'false'}">
                    ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                </p>
            </div>`
        ;
        } else {
            div.addEventListener("click", () => {
                openPopup(article.titre, article.prix, article.description, article.img, article.solde);
            });
            div.innerHTML = `
                <div class="write">
                    <img src="${article.img}" alt="Article">
                    <h3>${article.titre}</h3>
                    <p><strike id="barre">${article.solde}</strike> | ${article.prix} €</p>
                    <p id="${article.dispo ? 'true' : 'false'}">
                        ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                    </p>
                </div>
            `;
        }
        articleList.appendChild(div);
    });
}

function loadDatachaussure(list) {
    let articleList = document.querySelector(".wrapper"); 
    list.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article");
        if (article.type == "chaussure") {
            if (article.solde == undefined) {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img);
                });
                div.innerHTML = `
                <div class="write">
                    <img src="${article.img}" alt="Article">
                    <h3>${article.titre}</h3>
                    <p>${article.prix} €</p>                          
                    <p id="${article.dispo ? 'true' : 'false'}">
                        ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                    </p>
                </div>`
            ;
            } else {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img, article.solde);
                });
                div.innerHTML = `
                    <div class="write">
                        <img src="${article.img}" alt="Article">
                        <h3>${article.titre}</h3>
                        <p><strike id="barre">${article.solde}</strike> | ${article.prix} €</p>
                        <p id="${article.dispo ? 'true' : 'false'}">
                            ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                        </p>
                    </div>
                `;
            }
            articleList.appendChild(div);
        }
    });
}

function loadDatapullover(list) {
    let articleList = document.querySelector(".wrapper"); 
    list.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article");
        if (article.type == "pullover") {
            if (article.solde == undefined) {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img);
                });
                div.innerHTML = `
                <div class="write">
                    <img src="${article.img}" alt="Article">
                    <h3>${article.titre}</h3>
                    <p>${article.prix} €</p>                          
                    <p id="${article.dispo ? 'true' : 'false'}">
                        ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                    </p>
                </div>`
            ;
            } else {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img, article.solde);
                });
                div.innerHTML = `
                    <div class="write">
                        <img src="${article.img}" alt="Article">
                        <h3>${article.titre}</h3>
                        <p><strike id="barre">${article.solde}</strike> | ${article.prix} €</p>
                        <p id="${article.dispo ? 'true' : 'false'}">
                            ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                        </p>
                    </div>
                `;
            }
            articleList.appendChild(div);
        }
    });
}
//lukamarquet
function loadDatatshirt(list) {
    let articleList = document.querySelector(".wrapper"); 
    list.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article");
        if (article.type == "t-shirt") {
            if (article.solde == undefined) {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img);
                });
                div.innerHTML = `
                <div class="write">
                    <img src="${article.img}" alt="Article">
                    <h3>${article.titre}</h3>
                    <p>${article.prix} €</p>                          
                    <p id="${article.dispo ? 'true' : 'false'}">
                        ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                    </p>
                </div>`
            ;
            } else {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img, article.solde);
                });
                div.innerHTML = `
                    <div class="write">
                        <img src="${article.img}" alt="Article">
                        <h3>${article.titre}</h3>
                        <p><strike id="barre">${article.solde}</strike> | ${article.prix} €</p>
                        <p id="${article.dispo ? 'true' : 'false'}">
                            ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                        </p>
                    </div>
                `;
            }
            articleList.appendChild(div);
        }
    });
}

function loadDatapantalon(list) {
    let articleList = document.querySelector(".wrapper"); 
    list.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article");
        if (article.type == "pantalon") {
            if (article.solde == undefined) {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img);
                });
                div.innerHTML = `
                <div class="write">
                    <img src="${article.img}" alt="Article">
                    <h3>${article.titre}</h3>
                    <p>${article.prix} €</p>                          
                    <p id="${article.dispo ? 'true' : 'false'}">
                        ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                    </p>
                </div>`
            ;
            } else {
                div.addEventListener("click", () => {
                    openPopup(article.titre, article.prix, article.description, article.img, article.solde);
                });
                div.innerHTML = `
                    <div class="write">
                        <img src="${article.img}" alt="Article">
                        <h3>${article.titre}</h3>
                        <p><strike id="barre">${article.solde}</strike> | ${article.prix} €</p>
                        <p id="${article.dispo ? 'true' : 'false'}">
                            ${article.dispo ? 'Disponible ✅' : 'Indisponible ❌'}
                        </p>
                    </div>
                `;
            }
            articleList.appendChild(div);
        }
    });
}

while (marqueeContent.scrollWidth < marqueeContent.parentElement.offsetWidth * 2) {
    marqueeContent.innerHTML += originalContent;
}

function openPopup(title, price, description, image, reduce) {
    document.querySelector('.pkpas').style.display = '';
    document.querySelector('.img').style.display = '';
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-price").textContent = price;
    document.getElementById("popup-reduce").textContent = reduce;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup-quantity").value = 1;
    document.getElementById("popup-image").src = image;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    buttonxs.classList.remove("active");
    buttonm.classList.remove("active");
    buttons.classList.remove("active");
    buttonl.classList.remove("active");
    buttonxl.classList.remove("active");
    taille = "non déterminée";
}

function addToCart() {
    const title = document.getElementById("popup-title").textContent;
    const price = document.getElementById("popup-price").textContent;
    const quantity = document.getElementById("popup-quantity").value;
    const finalPrice = parseFloat(price) * parseInt(quantity);
    alert(`Ajouté au panier : ${quantity} x ${title} taille ${taille} (${finalPrice} €)`);
    closePopup();
}

function sur(title, description) {
    document.querySelector('.pkpas').style.display = 'none';
    document.querySelector('.img').style.display = 'none';
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup").style.display = "flex";
    document.querySelector('.solde').style.display = 'none';
}

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredArticles = articles.filter(article => 
        article.titre.toLowerCase().includes(searchValue)
    );

    if (searchValue === "") {
        document.querySelector('.news').style.display = '';
        document.querySelector('.FAQ').style.display = '';
        document.getElementById("h2content").textContent = 'Nos suggestions pour vous';
        document.getElementById("noResult").style.display = 'none';
    } else {
        document.querySelector('.news').style.display = 'none';
        document.querySelector('.FAQ').style.display = 'none';
        document.getElementById("h2content").textContent = 'Recherche';

        if (filteredArticles.length === 0) {
            document.getElementById("noResult").style.display = 'flex';
        } else {
            document.getElementById("noResult").style.display = 'none';
        }
    }

    loadData(filteredArticles);
});
