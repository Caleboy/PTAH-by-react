//**时间转换
export const add0 = function (m) {
  return m < 10 ? '0' + m : m
}

export const reDate = function (date){
  var date = new Date(date),
    year = date.getFullYear(),
    mon = date.getMonth() + 1,
    day = date.getDate();
  return year + '-' + add0(mon) + '-' + add0(day);
}

export const plWeekDate = (gd, pday) => {
  var wJson = {
      mon: [0, false],
      tue: [0, false],
      wed: [0, false],
      thu: [0, false],
      fri: [0, false],
      sat: [0, false],
      sun: [0, false]
    },
    m = 0;
  if(typeof gd !== 'number') return wJson;
  if(pday === undefined){
    for( var i in wJson ) {
      m++;
      if(m <= gd) {
        wJson[i] = [0, false];
      }else{
        wJson[i] = [m - gd, true];
      }
    }
  } else {
    for( var i in wJson ) {
      m++;
      if(m < gd) {
        wJson[i] = [(pday - gd) + m + 1, true];
      }else{
        wJson[i] = [0, false];
      }
    }
  }
  return wJson;
}

