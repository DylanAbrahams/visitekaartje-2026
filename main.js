console.log('hallo!');

const apiURL = 'https://fdnd.directus.app/items/person/289';
const parentElement = document.querySelector('main')

parentElement.classList.add('loading')

fetchJson(apiURL).then(function (response) {
    console.log(response.data)
    parentElement.innerHTML = `
    <article>
        <h2>${response.data.name}</h2>
        <p>${response.data.id}</p>
        <p>${response.data.nickname}</p>
        <p>${response.data.website}</p>
        <p>${response.data.bio}</p>
    </article>
    `
})

parentElement.classList.remove('loading')


async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
        .then((response) => response.json())
        .catch((error) => error)
}