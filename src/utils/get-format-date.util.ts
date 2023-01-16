export function getFormatDate(date: Date) {
  var year = date.getFullYear();
  var month: number | string = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  var day: number | string = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return year + "" + month + "" + day;
}
