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
  let newYearVenus = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearVenus / .62);
};

AgeCalculator.prototype.checkMarsYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearMars = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearMars / 1.88);
};

AgeCalculator.prototype.checkJupiterYears = function(){
  let currentDate = new Date();
  let userInput = new Date(this.date);
  let ageEarth = Math.floor((currentDate.getTime() - userInput.getTime()) / 1000);
  let newYearJupiter = Math.floor(ageEarth / 31536000);
  return Math.floor(newYearJupiter / 11.86);
};

AgeCalculator.prototype.lifeExpectancyMercury = function(){
  let lifeExpected = Math.floor(this.life / .24);
  let userInput = Math.floor(this.age / .24);
  let surpassed = userInput - lifeExpected;
  if (userInput > lifeExpected) {
    return 'Your surpassed the life expectancy by' + surpassed;
  } else {

  return lifeExpected;
}
};

AgeCalculator.prototype.lifeExpectancyVenus = function(){
  let lifeExpected = Math.floor(this.life / .62);
  let userInput = Math.floor(this.age / .62);
  let surpassed = userInput - lifeExpected;
  if (userInput > lifeExpected) {
    return 'Your surpassed the life expectancy by' + surpassed;
  } else {

  return lifeExpected;
};

AgeCalculator.prototype.lifeExpectancyMars = function(){
  let lifeExpected = Math.floor(this.life / 1.88);
  let userInput = Math.floor(this.age / 1.88);
  let surpassed = userInput - lifeExpected;
  if (userInput > lifeExpected) {
    return 'Your surpassed the life expectancy by' + surpassed;
  } else {
  return lifeExpected;
};

AgeCalculator.prototype.lifeExpectancyJupiter = function(){
  let lifeExpected = Math.floor(this.life / 11.86);
  let userInput = Math.floor(this.age / 11.86);
  let surpassed = userInput - lifeExpected;
  if (userInput > lifeExpected) {
    return 'Your surpassed the life expectancy by' + surpassed;
  } else {
  return lifeExpected;
};
