// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var dob = new Date("26/06/1998");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();

//convert the calculated difference in date format
var age_dt = new Date(month_diff); 

//extract year from date    
var year = age_dt.getUTCFullYear();

//now calculate the age of the user
var age = Math.abs(year - 1970);

//display the calculated age
document.getElementById("age").innerText = age;

