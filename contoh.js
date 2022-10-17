let containerDigimon = document.getElementById("list-digimon")

let getDataDigimon = async() => {
    let response = await fetch("https://digimon-api.vercel.app/api/digimon")
    let digimons = await response.json()
    
    digimons.forEach(item => {
        console.log(item)
        containerDigimon.innerHTML +=
        `
        <div class="col">
            <img src="${item.img}" width="200"/>
            <h3>${item.name}</h3>
        </div>
        `
    });
}

getDataDigimon()