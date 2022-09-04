const vegetables = [
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

function judgeVegetable(veggies, category){
  let array = [...veggies];
  array.sort((a, b) => (a[category] < b[category]) ? 1 : -1);
  return array[0].submitter;
}

const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));