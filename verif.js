const day = new Date().getDay();
const hours = new Date().getHours();
console.log(hours);
function verifi(req , res , next) {
    if(day>0 && day<6 && hours > 0 && hours < 17) next();
    else 
    res.send(`<h1>F-LAMBDA web application is only available during working hours (Monday to Friday,  from 9 to 17) </h1>`);
}

module.exports = verifi;