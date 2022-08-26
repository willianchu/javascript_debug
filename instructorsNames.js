const instructorWithLongestName = function(instructors) {
  
  let nameLength = [];

  let lengthCount = 0;

  let longIndex = 0;
  
  let longName;

  for (obj of instructors) {
    nameLength.push(obj.name.length);
  }
  // for loop to find largest nameLength value - store to lengthCount
  for (let i = 0; i < nameLength.length; i++) {
    if (nameLength[i] > lengthCount) {
      lengthCount = nameLength[i];
    }
  }

  // Use .indexOf to find index of largest lengthCount value - store to longIndex
  longIndex = nameLength.indexOf(lengthCount);

  // Use longIndex (which should match index of obj in array with largest name length value) to store object to longName variable
  longName = instructors[longIndex];
  
  // Test nameLength, lengthCount, longIndex, longName
  console.log(nameLength);
  console.log(lengthCount);
  console.log(longIndex);
  console.log(longName);

  // Return obj with longest name
  return longName;
};