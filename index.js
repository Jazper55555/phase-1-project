document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

function capitalizeFirstLetter(string) {
    // console.log('capitalize function')
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function fetchData() {
    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((resp) => resp.json())
    .then((data) => {
        const materialsData = data['data']['materials']
        console.log(materialsData)

        const imageContainer = document.getElementById('imageContainer')
        let counter = 1

        const locationText = document.createElement('div')
        locationText.classList.add('locationDiv')

        materialsData.forEach((materials) => {
            const imageUrl = materials['image']
            const name = materials['name']
            const description = materials['description']
            const locations = materials['common_locations']
            // console.log(name)
            // console.log(imageUrl)

            const capitalizedName = capitalizeFirstLetter(name)

            const imageElement = document.createElement('img')
            imageElement.src = imageUrl
            imageElement.id = `${counter}`
            counter++

            const tooltipElement = document.createElement('div')
            tooltipElement.classList.add('tooltip')
            tooltipElement.textContent = capitalizedName + ': ' + description

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

            imageElement.addEventListener('click', (event) => {
                // console.log('click works')
                locationText.textContent = locations
                // console.log(locations)       
                const locationTextVisibility = locationText.classList.contains('visibleLocation')
                
                if (locationTextVisibility) {
                    locationText.classList.remove('visibleLocation')
                } else {
                locationText.classList.add('visibleLocation')
                const tooltipRect = event.target.getBoundingClientRect()
                const containerRect = imageContainer.getBoundingClientRect()
                locationText.style.top = `${tooltipRect.top - containerRect.top}px`
                locationText.style.left = `${tooltipRect.left - containerRect.left}px`
                locationText.style.width = `${tooltipRect.width}px`
                console.log(locationText)
                }
            })

            imageContainer.appendChild(imageElement)
            imageContainer.appendChild(tooltipElement)
            imageContainer.appendChild(locationText)
        })

        // imageContainer.appendChild(locationText)

    })

    .catch((error) => {
        console.error('Error:', error)
    })
} 

// If someone clicks on an image, the image should bring up the location of the material
// The event listener should be 'click' 
