function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((currentValue, index) => currentValue === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filtered = users.filter(user => user.gender === gender);
  if (filtered.length === 0) {
    return 0;
  }
  let result = filtered.map(user => user.age).reduce((sum, age) => sum + age);
  return result / filtered.length;
}