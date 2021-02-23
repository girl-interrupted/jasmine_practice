describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe('divisible by 3', function() {
    it('fizzes for 3', function() {
      expect(javabuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function() {
      expect(javabuzz.play(6)).toEqual('fizz');
    });
  });


  describe('divisible by 5', function() {
    it('buzzes for 5', function() {
      expect(javabuzz.play(5)).toEqual('buzz');
    });

    it ('buzzes for 10', function() {
      expect(javabuzz.play(10)).toEqual('buzz');
    });
  });


  describe('divisible by 3 and 5', function(){
    it('javabuzzes for 15', function() {
      expect(javabuzz.play(15)).toEqual('javabuzz');
    });

    it('javabuzzes for 30', function() {
      expect(javabuzz.play(30)).toEqual('javabuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(javabuzz.play(1)).toEqual(1);
    });
    
    it('11 for 11', function() {
      expect(javabuzz.play(11)).toEqual(11);
    });
  });

});