const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}



//create map

const map = L.map('mapid', options).setView([-23.3176762,-51.1671636], 15)


// create and add a tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon 

const icon = L.icon({
    iconUrl: "./public/images/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker

L.marker([-23.3176762,-51.1671636], { icon } )
.addTo(map)

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    //remover toas as classes .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
   }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da imagem
    imageContainer.src = image.src

    // adicionar a classe .active para este botão
    button.classList.add('active')

}
