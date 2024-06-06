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

// let myName = person["isLogin"]; brackets notation

// console.log(myName);

// {
//     isSameAddress: true,
//     parmanentAddress: { city: 'Dhaka', district: 'Dhaka', postCode: 1205 },
//     presentAddress: { city: 'Dhaka', district: 'Dhaka', postCode: 1205 }
//   }

// let hasibName = person.myNumber; //dot notation

// let address = person.address;

// console.log(person.address.isSameAddress);
// console.log(person.address.parmanentAddress); //{ city: 'Dhaka', district: 'Dhaka', postCode: 1205 }
// console.log(person.address.parmanentAddress.city); //Dhaka

//
// const { myName, myNumber, address } = person; // destructuring

// console.log(myName);
// console.log(myNumber);
// console.log(address);

// const { isSameAddress, parmanentAddress, presentAddress } = address;

// console.log(isSameAddress, parmanentAddress, presentAddress);
