export function AgeCalculator (date, age)
{
  this.date = date;
  this.age = age;

}
AgeCalculator.prototype.checkDate = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let age = ((currentDate.getTime() - userInput.getTime()) / 1000);

  return age;
};

AgeCalculator.prototype.checkEarthYear = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);

  return Math.floor(ageEarth / 31536000);
};

AgeCalculator.prototype.checkMercuryYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearMercury = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearMercury / .24);
};

AgeCalculator.prototype.checkVenusYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearMercury = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearMercury / .62);
};

AgeCalculator.prototype.checkMarsYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearMercury = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearMercury / 1.88);
};

AgeCalculator.prototype.checkJupiterYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearMercury = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearMercury / 11.86);
};
