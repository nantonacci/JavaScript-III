/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In window/global binding "this" refers to everything in JavaScript, rather than pointing to a specific context.
 * 2. Implicit binding means that "this" refers to a specific context, implied by the location of the "this" keyword.
 * 3. Using the new binding, "this" refers to the details of an object created using the "new" keyword.
 * 4. Using .call, .bind, or .apply, you can override what the "this" keyword refers to by explicitly calling out another point of reference.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

let myCat = {
  name: 'Frankie',
  introduction: function() {
    return `I'm ${this.name}, nya!`;
  }
};
console.log(myCat.introduction());
// Principle 3

// code example for New Binding

function Cat(obj) {
  this.name = obj.name;
  this.species = obj.species;
  this.introduction = function() {
    return `I'm ${this.name} and I'm a ${this.species}, nya!`;
  };
}

let tiger = new Cat({ name: 'Tony', species: 'tiger' });
console.log(tiger.introduction());
// Principle 4

// code example for Explicit Binding
let bobcat = new Cat({ name: 'Betty', species: 'bobcat' });
console.log(tiger.introduction.call(bobcat));
