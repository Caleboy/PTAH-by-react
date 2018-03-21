// 判断json
const isObject = (obj) => {
  let isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
  return isjson;
};

export default isObject;

// 深度Json clone object
export const jsonCloneObj = function(obj){
  var str, newobj = obj.constructor === Array ? [] : {};
  if(typeof obj !== 'object'){
    return;
  } else if(window.JSON){
    str = JSON.stringify(obj), //系列化对象
      newobj = JSON.parse(str); //还原
  } else {
    for(var i in obj){
      newobj[i] = typeof obj[i] === 'object' ?
        jsonCloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};

// deep clone Object.create()
export const deepClone = function (initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
      deepClone(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
