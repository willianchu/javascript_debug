import { expect } from 'chai'

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

let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
let metric = 'redness'
let result = judgeVegetable(vegetables, metric)
expect(result).to.equal('Old Man Franklin')
vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'
result = judgeVegetable(vegetables, metric)
expect(result).to.equal('C')