console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a.
jokeJS1= JSON.parse(oneAJSON);

// 1b. 
p1.innerText = jokeJS1.setup;

// 1c. 
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
// 2a.
const activity = axios.get(`https://www.boredapi.com/api/activity/`)


// 2b. 
.then((resolved) => {
    const activityJS2 = resolved.data;
    console.log(activityJS2);
// 2c.
    p3.innerText = activityJS2.type;
    p4.innerText = activityJS2.activity;
})
// 2d.
.catch(rejected => {
        console.log(`Rejected, No data found`);
     console.log(rejected);
     });
    



// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

const activity2 = axios.get(`https://www.boredapi.com/api/activity/`);

async function activityFunc(secondact){
    try {
    const activityJS3 = await secondact;
    console.log(activityJS3);
    p5.innerText = activityJS3.data.activity;
    p6.innerText = activityJS3.data.type;
    } catch (rejected) {
        console.log('Rejected', error);
    }

}

activityFunc(activity2);


// 4
// const fourth = document.querySelector('#fourth');
// const p7 = document.createElement('p');
// fourth.append(p7);

// const tvshows = axios.get(`https://www.tvmaze.com/api/`);

// async function tvMazeFunc(tvdata) {
//     try{
//         const tvshow = await tvdata;
//         console.log(tvshow);
//         // p7.innerText = 
//     } catch (rejected) {
//         console.log('Rejected', error);
//     }

// }

// 5.
const fifth = document.querySelector('#fifth');
const p8 = document.createElement('p');
fifth.append(p8);

const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);



async function getPokemonData() {
    try {
    const response = await pokemonPromise;
    const pokemonData = response.data
    console.log(pokemonData);
    console.log(pokemonData.name);
    const pikapic = document.createElement('img');
    image.src = pokemonData.sprites.front_female;
    fifth.append(pikapic);
    } catch (error) {
        console.log('Error', error);
    }
}

getPokemonData();



