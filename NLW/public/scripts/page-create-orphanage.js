//create map

const map = L.map('mapid').setView([-23.3176762,-51.1671636], 15)


// create and add a tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon 

const icon = L.icon({
    iconUrl: "./public/images/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon

    marker&& map.removeLayer(marker)

    // add icon layer

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})



//adicionar campo de fotos

function addPhotoField() {

    //pegar o container de fotos #
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone/duplicação da última imagem adicionada
    const newFieldContainer = fieldsContainer[ieldsContainer.length -1].cloneNode(true)

    //verificar se o campo está vazio,caso sim,não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar o container de imagens
    input.value = ""

    //adicionar o clone ao container de #images    
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

// select yer or no
function toggleSelect(event) {

    //retirar a classe .active(dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    
    input.value = button.dataset.value
 
}


