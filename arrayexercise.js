// Arrays Exercise 1: Breakfast
const breakfastArr = ["cereal"];
breakfastArr.push("tea");
console.log(breakfastArr);

breakfastArr.unshift("banana");
console.log(breakfastArr);
console.log(breakfastArr.length);

// Arrays Exercise 2: Last Value
const fruits = ["Apple", "Cherries", "Kiwi", "Mangoes"];
fruits.splice(); {
console.log(fruits.length-1);
}

// Arrays Exercise 3: Music
const musicGenresArr = ["Rock", "Rap"];
console.log(musicGenresArr);
musicGenresArr.push("Jazz");
console.log(musicGenresArr);

musicGenresArr[1]= "Classical";
console.log(musicGenresArr);
musicGenresArr.unshift("Blues", "Reggae");
console.log(musicGenresArr);

// Arrays Exercise 4: Sort
const musicArr = ["Classical", "Rock", "Reggae", "Rock", "Rap"];
musicArr.sort();
console.log(musicArr);