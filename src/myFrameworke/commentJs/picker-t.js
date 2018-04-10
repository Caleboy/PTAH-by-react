import { plWeekDate } from './reDate'
import { weekDayJson } from "./variable"
import { deepClone } from "./isObject"

/*
 * 生成日历列表
 */
const picker = function (m, optDate) {
  let today = new Date(),
    date = m ? new Date(m) : today,
    year = date.getFullYear(),
    mon = date.getMonth() + 1,
    firstDate = new Date(year + '-' + mon + '-01'), //当月的第一天
    day = new Date(year, mon, 0),
    lastDate = new Date(year + '-' + mon + '-' + day.getDate()), // 获取当月最后一天日期
    pDay = new Date(year, mon - 1, 0),
    pLastDate = new Date(year + '-' + (mon - 1) + '-' + pDay.getDate()), // 获取前一月最后一天日期
    allDateArr = [];  // 当月所有时间数组

  if(mon == 1){
    pDay = new Date(year-1, 12, 0),
      pLastDate = new Date((year - 1) + '-' + 12 + '-' + pDay.getDate());
  }

  var lastDateWeekTime = lastDate.getDate() - lastDate.getDay(), // 当月最后一天距离星期天的天数
    firstDateWeekTime = firstDate.getDay(), // 当月第一天的星期
    MonthDay = Math.ceil((lastDateWeekTime - (firstDate.getDate())) / 7) + 1; // 得到总的星期数

  if(firstDateWeekTime == 0){
    MonthDay += 1;
  }

  for (var j = 0; j < MonthDay; j++) {
    var dayJson = deepClone(weekDayJson);
    for (var k = lastDate.getDate(); k >= 0; k--) {  // 循环所有显示天数
      var kTime = new Date(year + '-' + mon + '-' + k),
        w = kTime.getDay(),
        kDay = Math.ceil((lastDateWeekTime - k) / 7); // 判断这一天在第几个星期
      if (w == 0) {
        kDay = Math.ceil((lastDateWeekTime - k + 1) / 7);
      }
      if (w == 0 && j == kDay) {
        dayJson.sun[0] = k;
      }
      else if (w == 1 && j == kDay) {
        dayJson.mon[0] = k;
      }
      else if (w == 2 && j == kDay) {
        dayJson.tue[0] = k;
      }
      else if (w == 3 && j == kDay) {
        dayJson.wed[0] = k;
      }
      else if (w == 4 && j == kDay) {
        dayJson.thu[0] = k;
      }
      else if (w == 5 && j == kDay) {
        dayJson.fri[0] = k;
      }
      else if (w == 6 && j == kDay) {
        dayJson.sat[0] = k;
      }
    }
    allDateArr.push(dayJson);
  }

  // 下一个月的几天
  var lDArr = plWeekDate(lastDate.getDay(), 0);
  for(var kay in allDateArr[0]){
    if(lDArr[kay][1] === true)
    allDateArr[0][kay] = lDArr[kay]
  }

  // 上一个月的几天
  var len = allDateArr.length - 1,
    pDate = pLastDate.getDate(),
    pDArr = plWeekDate(firstDate.getDay() === 0 ? 7 : firstDate.getDay(), pDate);
  for(var kay in allDateArr[len]){
    if(pDArr[kay][1] === true)
      allDateArr[len][kay] = pDArr[kay]
  }

  // 判断当天
  var tw = Math.ceil((lastDateWeekTime - today.getDate() + 1) / 7);
  for (var n in allDateArr[tw]) {
    if (allDateArr[tw][n][0] === today.getDate()) {
      allDateArr[tw][n][2] = 't';
    } else {
      allDateArr[tw][n][2] = 'o';
    }
  }
  // 判断选择的时间
  if(optDate) {
    var optDate = new Date(optDate);
    var sw = Math.ceil((lastDateWeekTime - optDate.getDate() + 1) / 7);
    for (var n in allDateArr[sw]) {
      if (allDateArr[sw][n][0] === optDate.getDate() && optDate.getMonth() + 1 === mon && optDate.getFullYear() === year) {
        allDateArr[sw][n][3] = 'opt';
      } else {
        allDateArr[sw][n][3] = 'n';
      }
    }
  }

  if (lastDate.getDay() == 0) {
    allDateArr.splice(0, 1);
  }

  allDateArr.reverse();

  return allDateArr;
}

export default picker;


