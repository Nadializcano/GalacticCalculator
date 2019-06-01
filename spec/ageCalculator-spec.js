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
  // it('should correctly determine whether three lengths can be made into traingle', function(){
  //   var notTriangle = new AgeCalculator(30,3,3);
  //   expect (notTriangle.checkTriangle()).toEqual('invalid');
  // });
});
