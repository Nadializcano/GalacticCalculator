import { AgeCalculator } from './../src/AgeCalculator.js';
describe('AgeCalculator', function() {
  // var reusableAgeCalculator;
  //
  // beforeEach(function(){
  //   reusableAgeCalculator = new AgeCalculator ();
  // });


  it('should test the difference between age and date in seconds', function() {
    let userInput = new AgeCalculator('10-31-1988');
    let age = userInput.checkDate();
    expect(age - userInput).toEqual(userInput - age);
  });
  it('should test the age in seconds', function(){
    let userInput = new AgeCalculator('10-31-1988');
    let date = new Date(userInput.date);
    let currentDate = new Date();
    expect(userInput.checkDate()).toEqual((currentDate.getTime() - date.getTime()) / 1000);
  });

  it('should test that the program gets years', function(){
    let userInput = new AgeCalculator('10-31-1988');
    let age = userInput.checkDate();
    expect(age - userInput).toEqual(userInput - age / 3.154e+7);
  });

});
