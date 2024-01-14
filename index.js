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
            const description = materials['description']
            // console.log(name)
            // console.log(imageUrl)
            const imageElement = document.createElement('img')
            imageElement.src = imageUrl
            imageElement.id = `${counter}`
            counter++

            const tooltipElement = document.createElement('div')
            tooltipElement.classList.add('tooltip')
            tooltipElement.textContent = name + ': ' + description

            imageElement.addEventListener('mouseover', (event) => {
                const imageRect = event.target.getBoundingClientRect()
                const containerRect = imageContainer.getBoundingClientRect()
                tooltipElement.style.top = `${imageRect.top - containerRect.top}px`
                tooltipElement.style.left = `${imageRect.left - containerRect.left}px`
                tooltipElement.style.width = `${imageRect.width}px`;
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