//------- Requirements
// Write an asynchronous function and call it with async/await
// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function



function getRandomNumber(){
     
    return new Promise((resolve) => {
      setTimeout(() => {
          const rand = Math.floor(Math.random() * 1000);
          console.log(rand);
          resolve(rand);
      }, 500);
    });
  }
  async function newFunction(){
      let random = await getRandomNumber();
      console.log("Your number is: " + random);
  }
  newFunction();



////////--------------Fetch remote data using async/await
// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)



//   async function city(cityName) {
//     fetch(`https://geocode.xyz/${cityName}?json=1`)
//       .then(response => response.json())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }
//   city('miami')
//   city('Alabama')

//   async function city(cityName) {
//     fetch(`https://geocode.xyz/${cityName}?json=1`)
//       .then(response => response.json())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }
//   city('waxhaw')
//   city('Newyork')
  

 
//  async function getRandomNumber(...args) {
//     console.log("Going to print a random number soon: ");
//     let randoChoice = -666; //negative for testing
//     if (args.length > 0) {
//       randoChoice = args[0];
//     } else {
//       randoChoice = defaultCap;
//     }
//     let randomNumber = await getRandomNumber(randoChoice);
//     console.log("Here it is: ");
//     console.log(randomNumber);
//   }
  
//   function getRandomNumber(cap) {
//     let rando = -1000;
//     let myPromise = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         rando = newRandom(cap);
//         if (rando > 0) {
//           resolve(rando);
//           console.log("Promise resolved!");
//         } else reject(rando);
//       }, 1000);
//     }).catch((reject) => {
//       console.log("Promise rejected! Rando = " + rando);
//     });
  
//     return myPromise;
//   }
  
//   function newRandom(cap) {
//     return Math.floor(Math.random() * cap + 1);
//   }
  
//   let defaultCap = 10;
//   let userInput = 100;
//   printRandomNumber();
//   printRandomNumber(userInput);
  


// };
