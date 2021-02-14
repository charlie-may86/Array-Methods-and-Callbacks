import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// const final2014 = fifaData.filter(x => x.Year === 2014 && x.Stage === 'Final')
// // console.log(newYear)
// console.log(final2014)

// // //(a) Home Team name for 2014 world cup final
// console.log(final2014[0]['Home Team Name'])

// // //(b) Away Team name for 2014 world cup final
// console.log(final2014[0]['Away Team Name'])

// // //(c) Home Team goals for 2014 world cup final
// console.log(final2014[0]['Home Team Goals'])

// // //(d) Away Team goals for 2014 world cup final
// console.log(final2014[0]['Away Team Goals'])

// //(e) Winner of 2014 world cup final */
// if(final2014[0]['Home Team Goals'] > final2014[0]['Away Team Goals']){
//     console.log(`The winner of the 2014 WC was ${final2014[0]['Home Team Name']}`)
// } else {
//     console.log(`The winner of the 2014 WC was ${final2014[0]['Away Team Name']}`)
// }



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

const finals = fifaData.filter((x) => x.Stage === 'Final')
const finalsTeams = finals.map((x) => {
    return {"Home Team": x['Home Team Name'], "Away Team": x['Away Team Name']}
})

// console.log(finalsTeams)


function getFinals(finalsTeams) {
    return finalsTeams
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(fifaData) {
    const years = fifaData.map((x) => x.Year);
    const unique = (value, index, self) => {
    return self.indexOf(value) === index
  };
    const uniqueYears = years.filter(unique)
    return uniqueYears;
};





/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(finals) {
    const finalsWinner = finals.map(function(x){
        if(x['Home Team Goals'] > x['Away Team Goals']) {
            return x['Home Team Name']
        } else {
            return x['Away Team Name']
        }
    });

    return finalsWinner;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
const finalsWinnerByYear = finals.map(function(x){
    if(x['Home Team Goals'] > x['Away Team Goals']) {
        return {'Winner': x['Home Team Name'], 'Year': x['Year']}
    } else {
        return {'Winner': x['Away Team Name'], 'Year': x['Year']}
    }
});
// for (let i = 0; i < finalsWinnerByYear.length; i++){
//     console.log(`In ${finalsWinnerByYear[i]['Year']}, ${finalsWinnerByYear[i]['Winner']} won the world cup!`)
// }



function getWinnersByYear(finals) {
    const finalsWinnerByYear = finals.map(function(x){
        if(x['Home Team Goals'] > x['Away Team Goals']) {
            return {'Winner': x['Home Team Name'], 'Year': x['Year']}
        } else {
            return {'Winner': x['Away Team Name'], 'Year': x['Year']}
        }
    });
    const finalsStatement = []
    for (let i = 0; i < finalsWinnerByYear.length; i++){
        finalsStatement.push(`In ${finalsWinnerByYear[i]['Year']}, ${finalsWinnerByYear[i]['Winner']} won the world cup!`)
    }
    return finalsStatement       
}






/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/



let homeTeamGoals = [];
for (let i = 0; i < finals.length; i++) {
    homeTeamGoals.push(finals[i]['Home Team Goals'])
}

let awayTeamGoals = [];
for (let i = 0; i < finals.length; i++) {
    awayTeamGoals.push(finals[i]['Away Team Goals'])
}
    
const reducer = (acc, current) => acc + current;
function getAvgGoals(array, reducerCode) {
    return (array.reduce(reducerCode)) / (array.length)
  }

const homeAvg = getAvgGoals(homeTeamGoals, reducer)
const awawyAvg = getAvgGoals(awayTeamGoals, reducer)

console.log(homeAvg)
console.log(awawyAvg)
 

function getAverageGoals(homeAvg, awawyAvg) {
    return homeAvg + awawyAvg
};

console.log(getAverageGoals(homeAvg, awawyAvg))

console.log('wops')




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
