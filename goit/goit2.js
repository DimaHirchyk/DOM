/*
function getOrderQuantity(order) {
  const lengthOrder = order.length;
  return lengthOrder;
}
console.log(
  getOrderQuantity(["apple", "peach", "pear", "banana"])
);
console.log(getOrderQuantity(["apple", "banana"]));
console.log(getOrderQuantity(["apple", "banana", "pear"]));
*/

/*
function getLastElementMeta(array) {
  const lengthArray = array.length - 1;
  const lastArray = array[lengthArray];
  return [lengthArray, lastArray];
}

console.log(
  getLastElementMeta(["apple", "peach", "pear", "banana"])
);
console.log(getLastElementMeta(["apple", "peach", "pear"]));

console.log(getLastElementMeta(["apple", "peach"]));
*/

/*
function getExtremeElements(array) {
  const firstArray = array[0];

  const lastArray = array[array.length - 1];
  return [firstArray, lastArray];
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(
  getExtremeElements(["apple", "peach", "pear", "banana"])
);
*/
/*
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (emptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}
*/

/*
function getLength(array) {
  const line = array.join("");
  return line.length;
}
console.log(
  getLength(["Mango", "hurries", "to", "the", "train"])
);
console.log(getLength(["M", "a", "n", "g", "o"]));
console.log(getLength(["top", "picks", "for", "you"]));
*/

/*function calculateEngravingPrice(message, pricePerWord) {
  const array = message.split(" ");
  const numArray = array.length;
  return numArray * pricePerWord;
}
console.log(
  calculateEngravingPrice("JavaScript is in my blood", 10)
);
console.log(
  calculateEngravingPrice("JavaScript is in my blood", 20)
);
console.log(
  calculateEngravingPrice(
    "Web-development is creative work",
    40
  )
);
console.log(
  calculateEngravingPrice(
    "Web-development is creative work",
    20
  )
);
*/

/* 
const fruits = [
  "apple",
  "plum",
  "pear",
  "orange",
  "banana",
];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2);
*/

/*
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClient = oldClients.concat(newClients);
*/

/*
function getSlice(array, value) {
  const index = array.indexOf(value);
  if (index === value.length - 1) {
    return [];
  }
  return array.slice(0, index + 1);
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
*/

/*
function createArrayOfNumbers(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log();
*/

/*
const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
*/

/*function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log();
*/

/*
function getEvenNumbers(start, end) {
  const newArray = [];
  for (let i = start; i <= end; i++)
    if (i % 2 === 0) {
      newArray.push(i);
    }
  return newArray;
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
*/

/*
function checkStorage(storage, item) {
  const lowerItem = item.toLowerCase();
  if (storage.includes(lowerItem)) {
    return `${lowerItem} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}

console.log(
  checkStorage(["apple", "plum", "pear"], "plum")
);
console.log(
  checkStorage(["apple", "plum", "pear"], "pLuM")
);
console.log(
  checkStorage(["apple", "plum", "pear"], "pear")
);
console.log(
  checkStorage(["apple", "plum", "pear"], "pEAr")
);
console.log(
  checkStorage(["apple", "plum", "pear"], "orange")
);
*/

/*
function getCommonElements(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
);
console.log(
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
);
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
*/

/*
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log();
*/

/*
function calculateTotalPrice(order) {
  let total = 0;
  for (const sumNumber of order) {
    total += sumNumber;
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));
*/

/*
function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);
*/

/*
function createReversedArray() {
  const arg = Array.from(arguments);
  return arg.toReversed();
}
console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());
*/

/* 
function calculateTax(amount, taxRate = 0.2) {
  const total = amount * taxRate;
  return total;
}
console.log(calculateTax(100, 0.1));
console.log(calculateTax(200, 0.3));
console.log(calculateTax(100, 0.2));
console.log(calculateTax(100));
console.log(calculateTax(200));
*/

/*
function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();
*/

/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);
*/

/*
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
*/

/*
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let array = [];

  for (const product of products) {
    if (product[propName] !== undefined)
      array.push(product[propName]);
  }
  return array;
}

console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category"));
*/

/*
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice("Radar")); // 5200 (1300 * 4)
console.log(calculateTotalPrice("Scanner")); // 8100 (2700 * 3)
console.log(calculateTotalPrice("Phone")); // "Product Phone not found!"
*/

/*
const atTheOldToad = {
  potions: [],
  getPotions() {
    return `List of all available potions`;
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
*/

/*
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};
*/

/*
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    return this.potions.push(potionName);
  },
};
*/

/*
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
console.log(bookShelf);
*/

/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
*/

/*
function add(...args) {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
}

console.log(add(15, 27));
console.log(add(32, 6, 13, 19, 8));
console.log(add(12, 4, 11, 48));
*/

/*
function addOverNum(value, ...args) {
  let sum = 0;
  for (const num of args) {
    if (num > value) {
      sum += num;
    }
  }
  return sum;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 12 + 11 + 48 = 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 32 + 19 = 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
*/

/*
function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
*/

/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
*/

/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings,
  ...overrideSettings,
};
*/
/*
function getEvenNumbers(args) {
  let array = [];
  for (const num of args) {
    if (num % 2 === 0) {
      array.push(num);
    }
  }
  return array;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
*/

/*
const profile = { username: "Alice", playTime: 120 };

getProfileInfo(profile){
  return `${this.username} has ${this.playTime} hours of playtime.`
}
  */

/*
function findMaxValue(args) {
  return Math.max(...args);
}
console.log(findMaxValue([1, 3, 7, 5, 4]));
*/

/*
function capitalizeFirstLetter(args) {
  const words = args.join(" ");
  const map = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return map.split(" ");
}
*/

/*
function filterByLength(strings, length) {
  let array = [];
  for (const str of strings) {
    if (str.length > length) {
      array.push(str);
    }
  }
  return array;
}

console.log(
  filterByLength(["apple", "orange", "kiwi", "banana"], 5)
);
*/

/*
function findMinMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (const num of numbers) {
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }
  return { min, max };
}
console.log(findMinMax([5, 10, -3, 2, 8]));
// Повертає: { min: -3, max: 10 }

console.log(findMinMax([1, 2, 3, 4, 5]));
// Повертає: { min: 1, max: 5 }
*/

/*
function mergeAndSortArrays(arr1, arr2) {
  const newArray = [...arr1, ...arr2];
  return newArray.sort((a, b) => a - b);
}
console.log(mergeAndSortArrays([3, 1, 4], [6, 2, 5]));
*/

/*
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 20 },
];

function filterAdults(people) {
  return people.filter(function (people) {
    return people.age <= 18;
  });
}

console.log(filterAdults(people));
*/

/*
function removeDuplicates(args) {
  let array = [];
  for (const newArray of args) {
    if (!newArray.includes(newArray)) {
      array.push(newArray);
    }
  }
  return array;
}
*/

/*
const shoppingCart = {
  items: [
   { name: 'Apple', price: 500},
   { name: 'Banana', price: 5000},
   { name: 'Bananas', price: 400},
   { name: 'aples', price: 5010},
  ],

addItem(name, price) { 
  return this.items.push( {name, price})
}
getTotalPrice(){
  let totalPrice = 0 
  for (const sum of this.items){
    totalPrice += sum.price
  }  return totalPrice
}
removeItem(name){
  const index = this.items.findIndex(this.items => items.name === name )
if (index !== -1){
  this.items.splice(index, 1)
}
}
showItems() {
  this.items.map(item => item.name).join(', ')
}
};
*/

/*
const library = {
  books: [
    { title: "Dom", author: "Hirchyck", isAvailable: true },
    {
      title: "sdasdwedf",
      author: "dasf",
      isAvailable: false,
    },
  ],

  addBook(title, author) {
    return this.books.push({ title, author });
  },

  removeBook(title) {
    const index = this.books.findIndex(
      (books) => books.title === title
    );
    if (index !== -1) this.books.splice(index, 1);
  },

  listAvailableBooks() {
    let array = [];
    for (const item of this.books) {
      if (item.isAvailable) {
        array.push(item);
      }
      return array;
    }
  },

  borrowBook(title) {
    const book = this.books.find(
      (book) => this.books.title === title
    );
    if (book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        return `You borrowed ${title}.`;
      } else {
        return `Sorry, ${title} is not available.`;
      }
    } else {
      return `Book titled "${title}" not found in the library.`;
    }
  },
};

library.addBook("Brave New World", "Aldous Huxley"); // Додає нову книгу
library.removeBook("1984"); // Видаляє книгу "1984"
console.log(library.listAvailableBooks()); // ["Brave New World"]
console.log(library.borrowBook("Dune")); // "Sorry, Dune is not available."
*/

/*
const shoppingList = {
  items: [
    { name: "Apples", quantity: 4 },
    { name: "Bananas", quantity: 2 },
  ],

  addItem(name, quantity) {
    return this.items.push({ name, quantity });
  },

  removeItem(name) {
    const index = this.items.findIndex(
      (items) => items.name === name
    );
    if (index !== -1) this.items.splice(index, 1);
  },

  getTotalItems() {
    let totalItem = 0;
    for (const item of this.items) {
      totalItem += item.quantity;
    }
    return totalItem;
  },

  showList() {
    return this.items
      .map((item) => `${item.name}: ${item.quantity}`)
      .join(", ");
  },
};
console.log(shoppingList.addItem("Oranges", 3));
console.log(shoppingList.showList()); // Apples: 4, Bananas: 2, Oranges: 3
console.log(shoppingList.getTotalItems()); // 9
shoppingList.removeItem("Bananas");
console.log(shoppingList.showList()); // Apples: 4, Oranges: 3
*/

console.log({ a: 1 } === { a: 1 });
