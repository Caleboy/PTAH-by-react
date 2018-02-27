import isObject from './isObject';
import addSpace from './addSpace'

const classNames = (obj, el) => {
  let defaultClass = `${el} ${el}-loading`;

  if(!isObject(obj)) return defaultClass;

  let { noPropsClass, hasPropsClass } = '';

  let typeClass = obj.type ? `${el}-${obj.type}` : null;

  let typeActionClass = obj.type && obj.action ? `action-${obj.type}` : !!'';

  if(!obj.props || obj.props === ''){
    noPropsClass = typeClass ? `${typeClass}${addSpace(typeActionClass)}` : `${el}-loading`;
    return `${el} ${noPropsClass}`;
  }

  if(obj.props) {
    hasPropsClass = typeClass ? `${obj.props} ${typeClass}${addSpace(typeActionClass)}` : obj.props;
    return `${el} ${hasPropsClass}`;
  }

  return defaultClass;
}

export default classNames;
