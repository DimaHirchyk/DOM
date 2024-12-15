"use strict";

const character = "#";
const count = 15;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
/* for (let i = 0; i <= count; i = i + 1) {
  rows.push(padRow(i, count));
}*/

if (true) {
  console.log("Condition is true");
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// console.log("Jacob Mercer");
// console.log(26);

// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 3500;

// console.log(productName, pricePerItem);

// // const age = 20;
// const salary = 3710.84;

// console.log(age, salary);

// let value = null;
// console.log(value);

// const x = 8;
// const y = 5;
// console.log(x % y);

// let age = 25;
// age += y + 1;
// console.log(age);

// const message = "Mango " + "is " + "happy";
// console.log(message);

// const message = "Poly is " + age + " years old!";
// console.log(message);

// console.log(1 + "2"); // "12"
// console.log("1" + "1" - "1"); // "124"
// console.log(1 + 2 + "4");

// const productName = "Droid";
// const pricePerItem = 3500;

// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice =
//   pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;

// console.log(message);

// console.log("Repair droid".length);

// const username = "Poly" + "Harambe" + "Billy" + "Joe";

// let message = `"Username ${username} is ${username.length} characters long"`;

// console.log(message);

// let username = "Poly";
// username[3] = "a";

// const age = 4;
// const isAdult = 18 <= age;

// console.log(isAdult);

// console.log(Number("5" > true));

// console.log(Math.random(1, 15, 58, 3, 13, 564));

// console.log(0.1 + 0.2);

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// Передача аргументів
// multiply(2, 3, 5);

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function multiply(x, y, z) {
//   console.log(
//     "The code before return is executed as usual"
//   );

//   return x * y * z;

//   console.log(
//     "This code is never executed because it is after return"
//   );
// }

// console.log(multiply(2, 3, 5)); // 30

// function makeMessage(username) {
//   console.log(`Hello ${username}`);
// }

// makeMessage("Jacob");

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// console.log("Log before multiply execution");
// // "Result: 30"
// console.log("Log after multiply execution");
// multiply(2, 3, 5);

// Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
//   // Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// // Можна звернутися до глобальної змінної
// console.log(value); // "I'm a global variable"
// foo();

// function foo() {
//   // Локальна змінна
//   const value = "I'm a local variable";
//   // Можна звернутися до локальної змінної
//   console.log(value); // "I'm a local variable"
// }

// foo();
// console.log(value); // ReferenceError: value is not defined
// // Помилка: локальну змінну не видно за межами функції;

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage("Radar", 6150));
// console.log(makeMessage("Scanner", 3500));
// console.log(makeMessage("Reactor", 8000));
// console.log(makeMessage("Engine", 4070));

// function calculateTotalPrice(
//   orderedQuantity,
//   pricePerItem
// ) {
//   let result = orderedQuantity * pricePerItem;
//   return result;
// }

// function calculateTotalPrice(
//   orderedQuantity,
//   pricePerItem
// ) {
//   let result = orderedQuantity * pricePerItem;
//   return result;
// }

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

/*const character = "#";
const rows = [];
const count = 8;

function padRow(rowNumber, rowCount) {
  const spaces = " ".repeat(rowCount - rowNumber);
  return spaces + character.repeat(rowNumber) + spaces;
}

const call = padRow("CamperChan");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

const word = ("b" + "a" + +"A" + "a").toLowerCase();
console.log(word);*/

/* function checkAge(age) {
  if (age > 18) {
    return `You are an adult`;
  }
}
console.log(checkAge);

*/
/*
const grade = 710;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
*/

/*function checkStorage(available, ordered) {
  if (available <= ordered) {
    return `Not enough goods in stock!`;
  } else {
    return `Order is processed, our manager will contact you`;
  }
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);*/

/* function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  const checkPassword =
    correctPassword === password
      ? "Access granted"
      : "Access denied, wrong password!";
  return checkPassword;
}
console.log(checkPassword); */

/* const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  case "aple":
    console.log("Apple selected");
    break;
  default:
    console.log("The fruit is unknown");
} */

/* const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("This is a working day");
    break;
  case 6:
  case 7:
    console.log("It is a day off");
    break;
  default:
    console.log("Invalid");
} */

/* function getSubscriptionPrice(type) {
  const starter = 0;
  const professional = 20;
  const organization = 50;
  switch (type) {
    case starter:
    case professional:
    case organization:
      console.log(type);
      break;
    case random:
      console.log(`Invalid subscription type!`);
      break;
    case premium:
      console.log(`Invalid subscription type!`);
  }
} */

/* if (null) {
  console.log("Block if");
} else {
  console.log("Block else");
}

if (0) {
  console.log("Block if");
} else {
  console.log("Block else");
}

if (5) {
  console.log("Block if");
} else {
  console.log("Block else");
} */

/* function checkAccess(subType) {
  return (subType = pro || vip);
}
checkAccess("pro");
checkAccess("starter");
checkAccess("vip");
checkAccess("free");
*/

/* const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
} */

/* function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else if (to === "lower") {
    return input.toLowerCase();
  }
}
console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
*/

/* const username = "Jacob Mercer";

console.log(username.includes("cer"));
*/

/* function checkForName(fullName, firstName) {
  const fullNameS = fullName.toLowerCase();
  const firstNameS = firstName.toLowerCase();

  if (fullNameS.includes(firstNameS)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "Jacob"));
*/

/* function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return `File extension matches`;
  } else {
    return `File extension does not match`;
  }
}
console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("styles.css", ".js"));
*/

/* function getFileName(file) {
  const files = file.indexOf(".");
  if (files === -1) {
    return file;
  } else {
    return file.slice(0, files);
  }
}
console.log(getFileName("styles.css"));
console.log(getFileName("app"));
*/

/* function createFileName(name, ext) {
  const fileName = `${name.trim()}.${ext}`;
  return fileName;
}
console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));
*/

/*let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}
  */

/* let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  (clientCounter);
  clientCounter += 1;
}
*/
/* 
function calculateTotal(number) {
  let sum = 0;
  let i = 1;
  while (i <= number) {
    sum += i;
    i++;
  }
  return sum;
}
(calculateTotal(3));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
*/

/* let count = 7;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5);
*/

/* function calculateTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
*/

/*let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5
*/

/*function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 2; i <= number; ++i) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(27));
*/

/* for (let i = 0; i < 10; i++) {
  console.log(i);

  if (i === 5) {
    console.log(
      "Met the number 5, interrupt the execution of the cycle"
    );
    break;
  }
}

console.log("Log after cycle");
*/

/* const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);
*/

/* function findNumber(max, target) {
  console.log(
    "Log in the body of the function before the cycle"
  );

  for (let i = 5; i <= max; i += 2) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(
        `Found the number $ {target}, interrupt the cycle`
      );
      break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(25, 6);
("Log after exiting function");
*/

/*function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
*/

{
  let x;
}
console.log();
