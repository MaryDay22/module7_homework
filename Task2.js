//Задача №2

function checkPropertyExistence(str, obj) {
  return obj.hasOwnProperty(str);
}

let person = {
  name: "Mike",
  age: 23,
};

console.log(checkPropertyExistence("age", person));
console.log(checkPropertyExistence("lastName", person));
