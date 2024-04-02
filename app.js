// // Task 3
// let products = [
//   {
//     id: 1,
//     name: "Iphone 14",
//     price: 900,
//   },
//   {
//     id: 2,
//     name: "Samsung A70",
//     price: 500,
//   },
//   {
//     id: 3,
//     name: "BMW",
//     price: 50000,
//     pet: ["cat", "dog"],
//   },
//   {
//     id: 4,
//     name: "Iphone 15 Pro Max",
//     price: 2000,
//   },
// ];

// let search = prompt("Search: ").toLowerCase();
// let productFilter;

// if (search === "baha") {
//   productFilter = products.filter((a) => a.price > 1000);
// } else if (search === "ucuz") {
//   productFilter = products.filter((a) => a.price < 1000);
// } else {
//   productFilter = products.filter((a) => a.name.toLowerCase().includes(search));
// }
// productFilter.map((product) => console.log(product.name));
// console.log(products);
// console.log(products[2].pet[1]);
// products.map((product) => console.log(product.name));

let products = [
  {
    id: 1,
    name: "Iphone 14",
    price: 900,
  },
  {
    id: 2,
    name: "Samsung A70",
    price: 500,
  },
  {
    id: 3,
    name: "BMW",
    price: 50000,
    pet: ["cat", "dog"],
  },
  {
    id: 4,
    name: "Iphone 15 Pro Max",
    price: 2000,
  },
];

// let search = prompt("Search: ").toLowerCase();
// let productFilter;

// if (search === "baha") {
//   productFilter = products.filter((product) => product.price > 1000);
// } else if (search === "ucuz") {
//   productFilter = products.filter((product) => product.price < 1000);
// } else {
//   productFilter = products.filter((product) =>
//     product.name.toLowerCase().includes(search)
//   );
// }

// productFilter.map((product) => console.log(product.name));






// task 1


// products.sort((a, b) => a.price - b.price);

// for (let i = 0; i < products.length; i++) {
//     console.log(`${products[i].name} - ${products[i].price}`);
// }



//task 2

let random = [];
for (let i = 0; i < 5; i++) {
    random.push(Math.floor(Math.random() * 32));
}
console.log("Tesadufi reqemler:", random);
let cem = 0;
for (let i = 0; i < random.length; i++) {
    cem += random[i];
}
console.log("Hamisinin Cəmi:", cem);