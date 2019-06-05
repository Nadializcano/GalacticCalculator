export function AgeCalculator (date, age, life)
{
  this.date = date;
  this.age = age;
  this.life = life;

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

AgeCalculator.prototype.lifeExpectancyMercury = function(){
  let lifeExpected = Math.floor(this.life / .24);

  return lifeExpected;
};

AgeCalculator.prototype.lifeExpectancyVenus = function(){
  let lifeExpected = Math.floor(this.life / .62);

  return lifeExpected;
};

AgeCalculator.prototype.lifeExpectancyMars = function(){
  let lifeExpected = Math.floor(this.life / 1.88);

  return lifeExpected;
};

AgeCalculator.prototype.lifeExpectancyJupiter = function(){
  let lifeExpected = Math.floor(this.life / 11.86);

  return lifeExpected;
};
