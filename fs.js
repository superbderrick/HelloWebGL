var fa = require('fs');
fa.writeFileSync('food.txt' , 'I am a developer');
console.log(fa.readFileSync("food.txt").toString());