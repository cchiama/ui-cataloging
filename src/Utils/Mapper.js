const arrayToObject = (arr) => {
  const objCur = [];
  for (let i = 0; i < arr.length; ++i) {
    objCur.push({ label: arr[i], value: arr[i] });
    if ((arr.length - 1) === i) {
      return objCur;
    }
  }
  return objCur;
};

const convertValueToLabel = (resourcesPath) => {
  const newArray = [];
  const resCat = resourcesPath;
  const arrLength = resCat.length - 1;
  if (arrLength >= 1) {
    const arr = resCat;
    // Convert value to label & id to value
    Object.keys(arr).map((key) => {
      const obj = {
        label: arr[key].name,
        value: arr[key].id
      };
      newArray.push(obj);
      return newArray;
    });
  }
  return newArray;
};


const remapCodeLongDescription = (logicalViews) => {
  return (logicalViews.length > 0) ? // verificare che il servizio risponda [] non [{}], altrimenti mettere > 1
    logicalViews.map(view => ({
      value: view.code,
      label: view.longDescription
    }))
    : false;
};

const remapMultiArray = (multiArray) => {
  let obj = [];
  multiArray.forEach((el, index) => {
    if (multiArray[index]['fixed-field'] !== undefined) {
      obj.push(multiArray[index]['fixed-field']);
    }
  });
  return obj;
};

const isEmptyObject = (obj) => {
  for (const prop in obj) {
    if (Object.prototype.toString.call(obj[prop]) !== '[object Undefined]') { if (obj[prop] && obj[prop].length > 0) return false; }
  }
  return true;
};

const removeEmpty = (data) => {
  for (const entry in data) {
    if (Object.prototype.toString.call(data[entry]) === '[object Array]') {
      if (data[entry].length) {
        let i = data[entry].length;
        while (i--) {
          if (Object.prototype.toString.call(data[entry][i]) === '[object Null]') {
            data[entry].splice(i, 1);
          } else if (isEmptyObject(data[entry][i])) {
            data[entry].splice(i, 1);
          } else if (Object.prototype.toString.call(data[entry][i]) === '[object Object]') {
            removeEmpty(data[entry][i]);
          }
        }
      }
    } else if (Object.prototype.toString.call(data[entry]) === '[object Object]') {
      removeEmpty(data[entry]);
    }
  }
};

export default removeEmpty;

export { arrayToObject, convertValueToLabel, remapCodeLongDescription, remapMultiArray, removeEmpty };
