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
const jokeJS1= JSON.parse(oneAJSON);

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
// 2c.
    p3.innerText = activityJS2.type;
    p4.innerText = activityJS2.activity;
    console.log(`Question 2 was successful`);
})
// 2d.
.catch((err) => {
     console.log(`Question 2 failed to GET`);
     console.log(err);
     });
    



// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);


async function activityFunc(){
    try {
    const activity2 = await axios.get(`https://www.boredapi.com/api/activity/`);
    // 3c.
    p5.innerText = activity2.data.activity;
    p6.innerText = activity2.data.type;
    } catch (err) {
        console.log('Rejected', err);
    }

}

activityFunc();


// 4
 const fourth = document.querySelector('#fourth');
 const p7 = document.createElement('p');
 fourth.append(p7);


 async function tvMazeFunc() {
   try {
        const finalEp = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes`)
        
        p7.innerText = finalEp.data._embedded.episodes[7].name
        console.log('Question 4 was successful');
    } catch (err){
        console.log('Rejected', err);
    }
 }

 tvMazeFunc()

// 5. Bonus
const img = document.createElement('img');
const body = document.querySelector(`body`)



async function pika() {
    try {
    const pikaPic = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    img.src = pikaPic.data.sprites.front_female
    body.append(img)
    console.log(`Bonus question was successful`);

} catch (err){
    console.log(`Bonus question faile to GET`);
    console.log(err);
}
}

pika();



