// Задача №1

function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}
let obj = {
  name: "Mike",
  age: 23,
};

printOwnProperties(obj);