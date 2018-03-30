import { weekDayJson, MONTH_NAME } from "./variable"
import isObject, { deepClone } from './isObject'

export const add0 = function (m) {
  return m < 10 ? '0' + m : m
}

//**时间转换
export const reDate = function (date){
  var date = date ? new Date(date) : new Date(),
    year = date.getFullYear(),
    mon = date.getMonth() + 1,
    day = date.getDate();
  return year + '-' + add0(mon) + '-' + add0(day);
}

export const plWeekDate = (gd, pday, initAct) => {
  var wJson = initAct || deepClone(weekDayJson),
    m = 0;
  if(!isObject(wJson)) return {};
  if(typeof gd !== 'number' || typeof pday !== 'number') return wJson;
  if(pday === 0){
    for( var i in wJson ) {
      m++;
      m <= gd ? wJson[i] = [0, false] : wJson[i] = [m - gd, true];
    }
  } else {
    for( var i in wJson ) {
      m++;
      m < gd ? wJson[i] = [(pday - gd) + m + 1, true] : wJson[i] = [0, false];
    }
  }
  return wJson;
}

export const monthTrans = (month) => {
  let mon = parseInt(month),
    len = MONTH_NAME.length;
  if(typeof mon !== 'number') return MONTH_NAME[0];
  if(mon <= 0) return MONTH_NAME[0];
  if(mon > 12) return MONTH_NAME[len - 1];
  for(let i = 0; i < len; i++) {
    if(mon === i + 1) return MONTH_NAME[i]
  }
}


export const moyEstimate = (moy) => {
  let eg = /^20\d{2}(-|\/)\d{1,2}$/,
    ym = {
      year: '2018',
      month: '01'
    }
  if(!moy.match(eg)) return ym;
  let year = moy.slice(0, 4),
    month = moy.substring(5);
  return {
    year,
    month
  }
}
