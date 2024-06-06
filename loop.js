let friends = ["Fahim", "Hasib", "Fahmida", false, "dshjf", "nuisdjfk"]; // array

// for (const iterator of object) {

// }

// for (const eachItemValue of friends) {
//   console.log(eachItemValue);
// }

// friends[0];
// friends[1];
// friends[2];
// friends[3];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//for lop with array
// for (let index = 0; index < friends.length; index++) {
//   const element = friends[index];
//   //friends[0]
//   //friends[1]
//   //friends[2]
//   //friends[3]
//   //   console.log(index);
//   console.log(element);
// }

//basic for loop
// }
// index = 0;
// index = 1;
// index = 2;
// index = 3;
// index = 4;
// index = 5;
// index = 6;
// for (let index = 0; index <= 6; index++) {
//   console.log(index);
// }

//loop in object

let person = {
  myName: "Hasib",
  myNumber: 30,
  age: 35,
  isLogin: false,
  myFriendsRolls: [45, 78, 23],
  address: {
    isSameAddress: true,
    parmanentAddress: {
      city: "Dhaka",
      district: "Dhaka",
      postCode: 1205,
    },
    presentAddress: {
      city: "Dhaka",
      district: "Dhaka",
      postCode: 1205,
    },
  },
};

// console.log(person["myName"]);

// for (const key in object) {

// }

// person["myName"] = person[key];
// person["myNumber"] = person[key];
// person["age"] = person[key];
for (const key in person) {
  //   console.log(key);
  console.log(key + ":", person[key]);
}
