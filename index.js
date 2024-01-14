document.addEventListener('DOMContentLoaded', () => fetchData())

function fetchData() {
    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((resp) => resp.json())
    .then((data) => {
        const materialsData = data['data']['materials']
        console.log(materialsData)

        const imageContainer = document.getElementById('imageContainer')
        let counter = 1

        materialsData.forEach((materials) => {
            const imageUrl = materials['image']
            // console.log(imageUrl)
            const imageElement = document.createElement('img')

            imageElement.src = imageUrl

            imageElement.id = `${counter}`
            counter++

            imageContainer.appendChild(imageElement)
        })
    })
}

 