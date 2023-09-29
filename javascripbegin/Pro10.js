function show() {
  console.log(this.name, this.age, this.salary);
  for (var ph of this.phone) {
    console.log(ph);
  }
  var addr = this.address.current;
  console.log(addr.street, addr.city, addr.pincode);
  var addr2 = this.address.permanant;
  console.log(addr2.street, addr2.city, addr2.pincode);
}

var arr = [
  {
    name: "Samaradh",
    age: 34,
    salary: 12000,
    phone: ["29834982234", "9834728374"],
    address: {
      current: {
        street: "Lalitpur",
        city: "Sagour",
        pincode: 458001,
      },
      permanant: {
        street: "AzadPura",
        city: "Jhansi",
        pincode: 458002,
      },
    },
  },
  {
    name: "Shraya",
    age: 31,
    salary: 16000,
    phone: ["892764872", "18234728374"],
    address: {
      current: {
        street: "Lalitpur",
        city: "Bina",
        pincode: 458001,
      },
      permanant: {
        street: "AzadPura",
        city: "Sagour",
        pincode: 458002,
      },
    },
  },
];

for (var ob of arr) {
  show.call(ob);
}
