export function AgeCalculator (date, age)
{
  this.date = date;
  this.age = age;
}
AgeCalculator.prototype.checkDate = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  return ((currentDate.getTime() - userInput.getTime()) / 1000);

};
