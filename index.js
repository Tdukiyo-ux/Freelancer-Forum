/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer(NAMES, OCCUPATIONS, PRICE_RANGE) {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)]
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)]
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min
   
    return {name: name, occupation: occupation, rate: rate}
    
}
// Store this in a state object rather than a loop because I can build more complex apps. It's a good practice to keep all my data in one place.
const state = {
    freelancers: Array.from({length: 100},() => createFreelancer(NAMES, OCCUPATIONS, PRICE_RANGE))
}

state.averageRate = getAverageRate(state)

function getAverageRate(state){
    return state.freelancers.reduce((total, freelancer) => total + freelancer.rate, 0) / state.freelancers.length
}

function availableFreeLancers($freelancer){
    const $freelancer = document.createElement('tr')
    freelancer.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>${freelancer.rate}</td>
    `
    return $freelancer
}

function Freelancerlist(freelancers) {
    const $list = document.createElement('tbody') //created a T body elemnt

    freelancers.forEach((freelancer) => {$list.append(Freelancer(freelancer)) // loop through every freelancer using for each
    })
    return $list
}

function Averagerate(state){
    const $averageRate = document.createElement('p')

    $averageRate.innerHTML = `Average hourly rate: $${state.averageRate}/hr` // first $ is just the dollar sign character, the second ${} is the template literal to insert the value
    return $averageRate
}

function render(state) {
    const $app = document.querySelector('#app')

    $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <p id="averageRate"></p>
    <table>
        <tbody id="freelancerlist"></tbody>
     </table>
    `

    $app.querySelector('#averageRate').replaceWith(AverageRate) // to swap placerholder componets with out actual componets
    $app.querySelector('#freelancerlist').replaceWith(Freelancerlist(state.freelancers)) 
}
render(state) // to actually run the function



