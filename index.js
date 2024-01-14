document.addEventListener('DOMContentLoaded', () => fetchData())

function fetchData() {
    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((resp) => resp.json())
    .then((data) => {
        const treasureData = data['data']['materials']
        console.log(treasureData)
    })
}