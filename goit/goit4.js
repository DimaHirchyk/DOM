/*
function greet(str) {
  console.log(
    `${str}, ${this.username}, your room is ${this.room}!`
  );
}

const mango = {
  username: "Mango",
  room: 27,
};

const poly = {
  username: "Poly",
  room: 191,
};

greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"
*/

/*
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: "Alice",
};

const greet = sayHello.bind(user);

greet("Hello");
*/

/*
const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks();
*/

/*
const a = () => {
  console.log(this);
};

function b() {
  a();
}

b.call({ user: "Mango" });
*/

/*
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = {};
child.name = "Jason";
child.age = 27;
*/

class Car {
  static #maxPrice = 50000;

  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return `Error! Price exceeds the maximum`;
    } else {
      return `Success! Price is within acceptable limits`;
    }
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
