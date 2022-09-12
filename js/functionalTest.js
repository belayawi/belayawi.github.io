/*============Tests ===============*/

describe('Calculate the sum of an Array', function () {
  it('Sums all the numbers in an array', function () {
    assert.equal(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]), 45);
    assert.equal(sum([10, 20, 30, 40, 50, 60, 70, 80, 100]), 460);
  });
});

describe('Calculate the product of an Array', function () {
  it('multiply all the elements in an array', function () {
    assert.equal(multiply([1, 2, 3, 4, 5, 6, 7, 8, 9]), 362880);
    assert.equal(multiply([10, 20, 30, 40, 50, 60]), 720000000);
  });
});


describe("Computes the reversal of a String", function(){
    it("returns the reversed string ", function(){
        assert.equal(reverse("Hello"),"olleH");
        assert.equal(reverse("good morning"),"gninrom doog");
    });
});

describe("Returns the array of words that are longer than i", function(){
    it("filters the arrays that has longer word than  i", function(){
        expect(filterLongerWords(['John', 'Abreham', 'Paul', 'Jesica'],5)).to.be.an('array').that.includes( 'Abreham');
        expect(filterLongerWords(['John', 'Abreham', 'Paul', 'Jesica'],5)).to.be.an('array').that.includes( 'Jesica');
    })
})
