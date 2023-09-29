var ob1 = {
  name: "samaradh",
  age: 23,
  salary: 12000,
  address: {
    street: "Raj Nager",
    city: "lalitpur",
  },
};

console.log(ob1);
var ob2 = { ...ob1, address: { ...ob1.address } };
ob1.address.city = "lalitpur";
console.log(ob2);
