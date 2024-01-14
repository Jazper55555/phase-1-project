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
            const name = materials['name']
            // console.log(name)
            // console.log(imageUrl)
            const imageElement = document.createElement('img')
            imageElement.src = imageUrl
            imageElement.id = `${counter}`
            counter++

            const tooltipElement = document.createElement('div')
            tooltipElement.classList.add('tooltip')
            tooltipElement.textContent = name

            imageElement.addEventListener('mouseover', (event) => {
                const imageRect = event.target.getBoundingClientRect()
                tooltipElement.style.top = `${imageRect.top}px`
                tooltipElement.style.left = `${imageRect.left}px`
                tooltipElement.classList.add('visible')
                // const nameElement = document.getElementById('nameContainer')
                // nameElement.textContent = name
            })

            imageElement.addEventListener('mouseout', () => {
                tooltipElement.classList.remove('visible')
            })

            imageContainer.appendChild(imageElement)
            imageContainer.appendChild(tooltipElement)
        })

    })
} 