// Algorithm construction
// const { expect } = require('chai');

const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let winner = '';
  vegetables.forEach(function (vegetable) {
    if (vegetable[metric] > highest) {
      highest = vegetable[metric];
      winner = vegetable.submitter;
    }
  });
  return winner;
}

// let vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]
// let metric = 'redness'
// let result = judgeVegetable(vegetables, metric)
// expect(result).to.equal('Old Man Franklin')
// vegetables = [
//   {
//     submitter: 'A',
//     d: 5,
//   },
//   {
//     submitter: 'B',
//     d: 10,
//   },
//   {
//     submitter: 'C',
//     d: 25,
//   }
// ]
// metric = 'd'
// result = judgeVegetable(vegetables, metric)
// expect(result).to.equal('C')

// Test

// Import the Mocha library and the Chai assertion library
import { expect } from 'chai';
import { describe, it } from 'mocha';

// Import the function to be tested
// const judgeVegetable = require('./judgeVegetable');

// Define the test suite
describe('judgeVegetable', () => {
  // Define the test case for redness
  it('returns the submitter with the highest redness value', () => {
    const vegetables = [      {        submitter: 'Old Man Franklin',        redness: 10,        plumpness: 5,      },      {        submitter: 'Sally Tomato-Grower',        redness: 2,        plumpness: 8,      },      {        submitter: 'Hamid Hamidson',        redness: 4,        plumpness: 3,      },    ];
    const metric = 'redness';
    const winner = judgeVegetable(vegetables, metric);
    expect(winner).to.equal('Old Man Franklin');
  });

  // Define the test case for plumpness
  it('returns the submitter with the highest plumpness value', () => {
    const vegetables = [      {        submitter: 'Alice',        redness: 5,        plumpness: 10,      },      {        submitter: 'Bob',        redness: 8,        plumpness: 5,      },      {        submitter: 'Charlie',        redness: 2,        plumpness: 20,      },    ];
    const metric = 'plumpness';
    const winner = judgeVegetable(vegetables, metric);
    expect(winner).to.equal('Charlie');
  });
});
