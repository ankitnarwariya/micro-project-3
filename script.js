// list all the food items (done)
// list all the food items with category vegetables (done)
// list all the food items with category fruit (done)
// list all the food items with category protien (done)
// list all the food items with category nuts (done)
// list all the food items with category grains (done)
// list all the food items with category dairy (done)
// list all the food items with calorie above 100 (done)
// list all the food items with calorie below 100 (done)
// list all the food items with highest protien content to lowest (done)
// list all the food items with lowest cab content to highest (done)


// Json file import
const data = require('./food.json');
//console.log(food);


// list all the food items
function allFoodItems(){
    data.forEach((foodItems) =>{
        console.log(foodItems);;
    })
}
//allFoodItems();


// list all the food items with category vegetables
const food = data.filter((vegetables)=>{
    return vegetables.category === 'Vegetable'
})

//console.log(food);


// list all the food items with category Fruit
const food_2 = data.filter((fruits)=>{
    return fruits.category === 'Fruit'
})

//console.log(food_2);


// list all the food items with category Protein
const food_3 = data.filter((proteins)=>{
    return proteins.category === 'Protein'
})

//console.log(food_3);


// list all the food items with category Nuts
const food_4 = data.filter((nuts)=>{
    return nuts.category === 'Nuts'
})

//console.log(food_4);


// list all the food items with category Grain
const food_5 = data.filter((grains)=>{
    return grains.category === 'Grain'
})

//console.log(food_5);




// list all the food items with category Dairy
const food_6 = data.filter((dairy)=>{
    return dairy.category === 'Dairy'
})

//console.log(food_6);



// list all the food items with calorie above 100
const food_7 = data.filter((calAbove100)=>{
    return calAbove100.calorie > 100;
})

//console.log(food_7);



// list all the food items with calorie below 100
const food_8 = data.filter((calBelow100)=>{
    return calBelow100.calorie < 100;
})

//console.log(food_8);



//list all the food items with highest protien content to lowest
const food_9 = data.sort((a,b) => {
    return b.protiens - a.protiens
})
//console.log(food_9);


//list all the food items with lowest cab content to highest
const food_10 = data.sort((a,b) => {
    return a.cab - b.cab;
})

console.log(food_10);