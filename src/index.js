let today = new Date();
console.log(new Date());
let CurrentDate = today.getDate();

console.log(CurrentDate);

let CurrentMilliSeconds = today.getMilliseconds();
console.log(CurrentMilliSeconds);

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let Currentday = days[today.getDay()];
console.log(Currentday);

let currentYear = today.getFullYear();
console.log(currentYear);

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let currentMonth = months[today.getMonth()];
console.log(currentMonth);

let currentHours = today.getHours();
console.log(currentHours);

let currentMinutes = today.getMinutes();
console.log(currentMinutes);

let CurrentFulldate = `Today is  ${Currentday},${currentMonth},${CurrentDate}  ${currentYear}`;
console.log(CurrentFulldate);

function formatDate(todaysDate) {
  return todaysDate;
}

let todaysDate = `${Currentday},${currentMonth},${CurrentDate} ${currentYear}`;

console.log(formatDate(todaysDate));

let date = new Date("1990/01/10");

console.log(formatDate(date));
