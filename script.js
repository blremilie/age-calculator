function formatDate (inputDay, inputMonth, inputYear){

  let dateInput = inputDay + "/" + inputMonth + "/" + inputYear;
  return dateInput
}

formatDate();

function validateDate(date) {
  const [day,month,year] = date.split("/"); 
  let errorTable = [];

  if (!day) {
    errorTable.append (document.getElementById ("required_day"))
  }
  if (!month) {
    errorTable.append (document.getElementById ("required_month"))
  }
  if (!year) {
    errorTable.append (document.getElementById ("required_year"))
  }

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (isNaN(yearNum) || yearNum.length !== 4) {
    errorTable.push (document.getElementById("valid_year"))
  }

  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    errorTable.push (document.getElementById("valid_month"))
  }

  const dayInMonth = new Date(yearNum, monthNum, 0).getDate();

  if (isNaN(dayNum) || dayNum < 1 || dayNum > dayInMonth) {
    errorTable.push (document.getElementById("valid_day"))
  }

  return errorTable
}

function applyErrorStyle (errorTable){
  for (let index=0; index <errorTable.length; index ++) {
    errorTable[index].style.display= "block"
  }
}

let ageTable = calculateAge(inputDay, inputMonth,inputYear);

function calculateAge (inputDay, inputMonth, inputYear){
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

function applyCalculateStyle (ageTable){
   document.getElementById ("result_years").innerHTML = ageTable[0]
   document.getElementById("result_months").innerHTML = ageTable[1]
   document.getElementById("result_days").innerHTML = ageTable[2]
}

let button = document.getElementById("button");

button.addEventListener('click', function(e) {
  let dateFormat = formatDate(inputDay,inputMonth,inputMonth)
  let errorTable = validateDate(dateFormat)
  if (errorTable.length === 0){
    let age = calculateDate (inputDay, inputMonth, inputYear); applyCalculateStyle(age);
} else {
  applyErrorStyle (errorTable)
}
e.preventDefault()
})
