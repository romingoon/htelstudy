const kim = {
  nid: 3,
  addr: 'Busan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'hong', addr: { city: 'Seoul' } },
};

const copyArr = arr => {
  const results = [];
  for (let i of arr) {
    if (Array.isArray(i)) results.push(copyArr(i));
    else if (typeof i === 'object') results.push(deepCopyObject(i));
    else results.push(i);
  }
  return results;
};

const deepCopyObject = obj => {
  const copyObj = {};

  for (let i in obj) {
    const tempObj = obj[i];
    if (Array.isArray(tempObj)) copyObj[i] = copyArr(tempObj);
    else if (typeof tempObj === 'object') copyObj[i] = deepCopyObject(tempObj);
    else copyObj[i] = obj[i];
  }
  return copyObj;
};

const newKim = deepCopyObject(kim);
console.log(kim);

newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';

console.log(newKim);
console.log(kim);
