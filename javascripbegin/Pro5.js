function showData() {
  console.log(this.name, this.age, this.salary);
  for (var ph of this.phone) {
    console.log(ph);
  }
  var addr = this.address;
  console.log(addr.street, addr.city, addr.pincode);
}

var ob1 = {
  name: "Samaradh",
  age: 34,
  salary: 12000,
  phone: ["29834982234", "9834728374"],
  address: {
    street: "Lalitpur",
    city: "Sagour",
    pincode: 458001,
  },
  show: showData,
};

var ob2 = {
  name: "Ashish",
  age: 31,
  salary: 16000,
  phone: ["29834982234", "9834728374"],
  address: {
    street: "Lalitpur",
    city: "Jhansi",
    pincode: 458001,
  },
  show: showData,
};

ob1.show();
ob2.show();
