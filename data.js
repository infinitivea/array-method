const bills = [
  {
    id: "1",
    transactionDate: "2020-08-01",
    total: 12345,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Tle",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "2",
    transactionDate: "2020-08-01",
    total: 12298,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Tle",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "3",
    transactionDate: "2020-08-01",
    total: 41012,
    location: "Suphanburi",
    paymentType: "MasterCard",
    member: {
      name: "Peter",
      age: 33,
    },
    pointRate: 0.01,
  },
  {
    id: "4",
    transactionDate: "2020-08-02",
    total: 24826,
    location: "Trang",
    paymentType: "MasterCard",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "5",
    transactionDate: "2020-08-21",
    total: 47202,
    location: "Trat",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "6",
    transactionDate: "2020-08-15",
    total: 29815,
    location: "Lopburi",
    paymentType: "VISA",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "7",
    transactionDate: "2020-08-14",
    total: 28375,
    location: "Chonburi",
    paymentType: "VISA",
    member: {
      name: "Jak",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "8",
    transactionDate: "2020-08-19",
    total: 26923,
    location: "Chiang Mai",
    paymentType: "QR",
    member: null,
  },
  {
    id: "9",
    transactionDate: "2020-08-11",
    total: 12545,
    location: "Lampang",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "10",
    transactionDate: "2020-08-07",
    total: 46169,
    location: "Phuket",
    paymentType: "MasterCard",
    member: {
      name: "Por",
      age: 28,
    },
    pointRate: 0.01,
  },
  {
    id: "11",
    transactionDate: "2020-08-11",
    total: 23655,
    location: "Saraburi",
    paymentType: "AliPay",
    member: {
      name: "Jit",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "12",
    transactionDate: "2020-08-03",
    total: 42505,
    location: "Phuket",
    paymentType: "QR",
    member: {
      name: "Jit",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "13",
    transactionDate: "2020-08-03",
    total: 15678,
    location: "Phrae",
    paymentType: "Cash",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "14",
    transactionDate: "2020-08-26",
    total: 53209,
    location: "Loei",
    paymentType: "MasterCard",
    member: {
      name: "Jak",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "15",
    transactionDate: "2020-08-23",
    total: 11230,
    location: "Chiang Rai",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "16",
    transactionDate: "2020-08-26",
    total: 26748,
    location: "Nakhon Pathom",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "17",
    transactionDate: "2020-08-28",
    total: 15885,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "Tawan",
      age: 29,
    },
    pointRate: 0.01,
  },
  {
    id: "18",
    transactionDate: "2020-08-02",
    total: 38590,
    location: "Samut Prakan",
    paymentType: "AliPay",
    member: {
      name: "Pup",
      age: 38,
    },
    pointRate: 0.01,
  },
  {
    id: "19",
    transactionDate: "2020-08-17",
    total: 35786,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Ohm",
      age: 21,
    },
    pointRate: 0.01,
  },
  {
    id: "20",
    transactionDate: "2020-08-04",
    total: 23085,
    location: "Bangkok",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "21",
    transactionDate: "2020-08-03",
    total: 49957,
    location: "Nakhon Pathom",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "22",
    transactionDate: "2020-08-18",
    total: 38872,
    location: "Chonburi",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "23",
    transactionDate: "2020-08-29",
    total: 127142,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Prince",
      age: 27,
    },
    pointRate: 0.01,
  },
  {
    id: "24",
    transactionDate: "2020-08-05",
    total: 40543,
    location: "Rayong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "25",
    transactionDate: "2020-08-21",
    total: 11315,
    location: "Yala",
    paymentType: "VISA",
    member: {
      name: "Bank",
      age: 40,
    },
    pointRate: 0.01,
  },
  {
    id: "26",
    transactionDate: "2020-08-08",
    total: 42612,
    location: "Ranong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "27",
    transactionDate: "2020-08-11",
    total: 21988,
    location: "Chiang Mai",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "28",
    transactionDate: "2020-08-13",
    total: 48147,
    location: "Phayao",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "29",
    transactionDate: "2020-08-23",
    total: 23548,
    location: "Loei",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "30",
    transactionDate: "2020-08-27",
    total: 23218,
    location: "Khonkaen",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "31",
    transactionDate: "2020-08-24",
    total: 37463,
    location: "Nan",
    paymentType: "AliPay",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "32",
    transactionDate: "2020-08-06",
    total: 27477,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "P",
      age: 49,
    },
    pointRate: 0.01,
  },
  {
    id: "33",
    transactionDate: "2020-08-22",
    total: 109872,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.02,
  },
  {
    id: "34",
    transactionDate: "2020-08-06",
    total: 37786,
    location: "Bangkok",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "35",
    transactionDate: "2020-08-10",
    total: 120286,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.02,
  },
  {
    id: "36",
    transactionDate: "2020-08-25",
    total: 74321,
    location: "Nakhon Sawan",
    paymentType: "QR",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
];

// ข้อ1 มีทั้งหมดกี่บิล = 36
let numBills = bills.length;
console.log("Bills : ", numBills);

// ข้อ2 หายอมรวม total
const sumBills = () => {
  // --- get total by loop ---
  /* let sumBills = 0;
  for (let i = 0; i < numBills; i++) {
    sumBills += bills[i].total;
  }
  return sumBills; */
  // --- used array.reduce() ---
  const results = bills.reduce((acc, bill) => {
    return acc + bill.total;
  }, 0);
  return results;
};
console.log("Sum of bills total : ", sumBills());

// ข้อ3 หา average total
console.log("Average of total : ", (sumBills() / numBills).toFixed(3));

// ข้อ4 หาจำนวน member ว่ามีทั้งหมดกี่คน
// -- filter member not null, return array[obj.member] --
const filterMember = bills.filter((bill) => {
  return bill.member !== null;
});
// -- map member in filterMember, return array[obj.name] --
const members = filterMember.map((bill) => {
  return bill.member.name;
});
// -- filter member for unique, return array[members.name] --
const uniqueMembers = members.filter((member, index) => {
  return members.indexOf(member) == index;
});
console.log("Total member : ", uniqueMembers.length);

// ข้อ5 หาจำนวน total ในแต่ละ Location
// -- reduce bills for find total each location --
const totalInLocation = bills.reduce((acc, bill) => {
  // acc = {}, acc[bill.location] for key, bill.total for value
  // check if acc[bill.location];(key) is in acc ?
  if (!acc[bill.location]) {
    //create acc[bill.location] for key and bill.total for value
    acc[bill.location] = bill.total;
  }
  // check if key is in acc ? then += value
  else {
    acc[bill.location] += bill.total;
  }
  return acc;
}, {});
console.log("Total in location : ", totalInLocation);

// ข้อ6 หาจำนวน total ในแต่ละ payment
const totalInPayment = bills.reduce((acc, bill) => {
  if (!acc[bill.paymentType]) {
    acc[bill.paymentType] = bill.total;
  } else {
    acc[bill.paymentType] += bill.total;
  }
  return acc;
}, {});
console.log("Total in payment : ", totalInPayment);

// ข้อ7 หายอด total ของ member แต่ละคน
const totalEachMember = filterMember.reduce((acc, obj) => {
  if (!acc[obj.member.name]) {
    acc[obj.member.name] = obj.total;
  } else {
    acc[obj.member.name] += obj.total;
  }
  return acc;
}, {});
console.log("Total each member : ", totalEachMember);

// ข้อ 8. หา total ในแต่ละวัน
const totalByDate = bills.reduce((acc, bill) => {
  if (!acc[bill.transactionDate]) {
    acc[bill.transactionDate] = bill.total;
  } else {
    acc[bill.transactionDate] += bill.total;
  }
  return acc;
}, {});
console.log("Total by Date : ", totalByDate);

// ข้อ 9. ในแต่ละ location หา total sale, bill, average total จำแนกตาม transaction type
//

const filterMemberNull = bills.filter((bill) => {
  return bill.member === null;
});
const reduceMemberNull = filterMemberNull.map((acc) => {
  acc.member = "anonymous";
  return acc;
});

/*let total = 0;
let totalValue = 0;

let totalMember = 0;
let memberSet = new Set();

let locationSet = new Set();
let totalFromLocation = 0;

for (let i = 0; i < bills.length; i++) {
  total = i + 1;
  totalValue += bills[i].total;

  if (bills[i].member !== null) {
    memberSet.add(bills[i].member.name);
    totalMember = memberSet.size;
  }
  // add Location to set
  locationSet.add(bills[i].location);
}

// Map location and total from bills to newLocationSet
const newLocationSet = bills.map((bill) => {
  return {
    location: bill.location,
    total: bill.total,
  };
});

let avgTotal = totalValue / total;
console.log("Total : " + total); // 1-answer
console.log("TotalValue : " + totalValue); // 2-answer
console.log("Average : " + avgTotal.toFixed(3)); // 3-answer
console.log("Total Member : " + totalMember); // 4-answer */
