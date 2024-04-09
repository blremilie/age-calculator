function isLeapYear(year) {
  year = parseInt(document.getElementById("inputYear").value);
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;
}

function validateInput(inputDay, inputMonth, inputYear) {
  if(inputDay == "" || inputMonth == "" || inputYear == "") {
      alert("This field is required")
      return false
  }
  else if(!isLeapYear(inputYear) && parseInt(inputMonth) === 2 && parseInt(inputDay) >= 29) {
      alert("Day is to high")
      return false
  }
  else {
      return true
  }
}

function calculateDate (inputDay, inputMonth, inputYear){
  let dateEnter = new Date(inputYear, inputMonth - 1, inputDay);
  let today = new Date();
  let differenceDate = today - dateEnter;

  let differenceInDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  let differenceInYears = Math.floor(differenceInDays / 365);
  let remainderDaysAfterYears = differenceInDays % 365;

  let differenceInMonths = Math.floor(remainderDaysAfterYears / 30);
  let remainderDaysAfterMonths = remainderDaysAfterYears % 30;

  return [differenceInYears, differenceInMonths, remainderDaysAfterMonths]
}
let button = document.getElementById("button");

button.addEventListener('click', function() {
  let inputDay = document.getElementById("inputDay").value
  let inputMonth = document.getElementById("inputMonth").value
  let inputYear = document.getElementById("inputYear").value
  if(validateInput(inputDay, inputMonth, inputYear)) {
      let ageTable = calculateDate(inputDay, inputMonth, inputYear)
      console.log(ageTable[0])
      console.log(ageTable[1])
      console.log(ageTable[2])
  }
})