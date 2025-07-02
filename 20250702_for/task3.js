// 3*. Дан массив: let animals = ['dog', 'cat', 'bird', 'fish']
// С помощью цикла for .. in вывести его в обратном порядке

let animals = ['dog', 'cat', 'bird', 'fish']
for (let i in animals) {
    //          le-1
    // i = 0; 3: 4-1 - 0
    // i = 1; 2: 4-1 - 1
    // i = 2; 1: 4-1 - 2
    // i = 3; 0: 4-1 - 3
    console.log(animals[animals.length - 1 - i]);
}