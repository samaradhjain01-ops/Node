var ob1 = {
  name: "samaradh",
  age: 23,
  salary: 12000,
};

console.log(ob1);

var ob2 = { ...ob1, city: "lalitpur", name: "Ashish" };

ob1.age = 45;

console.log(ob2);
