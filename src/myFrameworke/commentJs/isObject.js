// 判断json
const isObject = (obj) => {
  let isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
  return isjson;
};

export default isObject;
