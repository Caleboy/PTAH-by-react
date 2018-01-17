import isObject from './isObject';
import addSpace from './addSpace'

const classNames = (obj) => {
  let defaultClass = 'icon icon-loading';

  if(!isObject(obj)) return defaultClass;

  let { noPropsClass, hasPropsClass } = '';

  let typeClass = obj.type ? `icon-${obj.type}` : null;

  let typeActionClass = obj.type && obj.action ? `action-${obj.type}` : !!'';

  if(!obj.props || obj.props === ''){
    noPropsClass = typeClass ? `${typeClass}${addSpace(typeActionClass)}` : 'icon-loading';
    return `icon ${noPropsClass}`;
  }

  if(obj.props) {
    hasPropsClass = typeClass ? `${obj.props} ${typeClass}${addSpace(typeActionClass)}` : obj.props;
    return `icon ${hasPropsClass}`;
  }

  return defaultClass;
}

export default classNames;
