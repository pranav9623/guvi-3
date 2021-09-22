"use strict";
var json = [
  {
    id: "1",
    message: "hello",
    tid: "2021-09-22 20:00",
    fromWho: "hello123@gmail.com",
  },
  {
    id: "2",
    msg: "there",
    tid: "2021-09-22 20:00",
    fromWho: "hello2@email.se",
  },
];

//for loop

for (var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.id);
}

//for in

for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(json[key].id);
  }
}

//for of

for (var key of json) {
  console.log(key.id);
}

//for each

json.forEach(function (obj) {
  console.log(obj.id);
});
