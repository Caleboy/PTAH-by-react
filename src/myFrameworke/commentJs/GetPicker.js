
export class GetTime {
  date = new Date();
  newDate() {
    return new Date(this.date);
  }
  get getYear() {
    let newDate = this.newDate();
    return newDate.getFullYear();
  }
  get getMonth() {
    let newDate = this.newDate();
    return newDate.getMonth() + 1;
  }
  get getDate() {
    let newDate = this.newDate();
    return newDate.getDate();
  }
}

class Picker {
  constructor(firstDate, weekOfFirstDate){
    this.firstDate = firstDate;
    this.weekOfFirstDate = weekOfFirstDate;
    this.oneArr = this.generateArray(this.firstDate, 7, true);
  }
  generateArray(num, len, bool) {
    return Array.from(new Array(len), (v, i) => {return [i + num, bool]});
  }
  get colCalendarArray() {
    let nextDateStr = this.weekOfFirstDate,
      nextDateArr = [];
    if( !nextDateStr || typeof nextDateStr !== 'string' ) return this.oneArr;
    let nextDateNum = nextDateStr.slice(0, 1) - 0;
    if( nextDateStr.endsWith('prev')) {
      this.oneArr = this.generateArray(this.firstDate, 7, false);
      nextDateArr = this.generateArray(1, 7 - nextDateNum, true);
    }else{
      nextDateArr = this.generateArray(1, 7 - nextDateNum, false);
    }
    this.oneArr.splice(nextDateNum, 7, ...nextDateArr);
    return this.oneArr
  }
}

export default Picker;
