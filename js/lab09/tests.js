

let sentences = 'This is not what I am supposed to do';
// let us filter the word 'not'

let array = [6, 4, 0, 3, -2, 1];
console.log(array.bubbleSort());



let john = new Teacher();
john.initialize('John Doe',36)
john.teach('Software Architecture');


describe("Filter Implementation on String Object", function(){
    it('It removes the banned word from the string ', function(){
            assert.equal(sentences.filter('not'),'This is  what I am supposed to do');
            
    });
});
describe("Sorts An array using Bubble Sort", function(){
    it('Makes a bubble sort on the given array', function(){
         assert.deepEqual(array.bubbleSort(),[-2, 0, 1, 3, 4, 6]);
        // expect(array.bubbleSort().to.equal([-2, 0, 1, 3, 4, 6]))
    });
});
describe("Implementation of the inheritance", function(){
    it("Will Return a teaching object", function(){
        assert.equal(john.name, 'John Doe');
        assert.equal(john.age, 36);

    });
    
});