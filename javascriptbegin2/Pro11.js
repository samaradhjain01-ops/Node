var arr1 = [
  { roll: 101, name: "samaradh", age: 34, marks: 343.32 },
  { roll: 102, name: "Ashish", age: 21, marks: 232.32 },
  { roll: 103, name: "montu", age: 23, marks: 212.32 },
  { roll: 104, name: "shraya", age: 31, marks: 231.32 },
  { roll: 105, name: "divisha", age: 27, marks: 211.32 },
  { roll: 106, name: "divit", age: 31, marks: 287.32 },
  { roll: 107, name: "lokesh", age: 28, marks: 265.32 },
  { roll: 108, name: "arvi", age: 26, marks: 345.32 },
];

// age<30 , top 2 student (roll,name) marks...

var data = arr1
  .filter((ob) => ob.age < 30)
  .sort((ob1, ob2) => ob2.marks - ob1.marks)
  .map((ob) => {
    return { roll: ob.roll, name: ob.name };
  })
  .slice(0, 2);

console.log(data);
