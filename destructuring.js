const person = {
  name: 'Seankim',
  age: 26,
  location: {
    city: "Seoul",
    temp: 92
  } 
};

/* ES6 Object destructuring */
// const name = person.name;
// const age = person.age;
const { name="Rebekah", age, location } = person // 여기에 선언하는건 default Value(person 객체에 name이 선언되지 않은 경우)

console.log(`${name} is ${age}`);

const { city, temp: temperature} = person.location;
console.log(` The ${city} is ${temperature} dgree`)