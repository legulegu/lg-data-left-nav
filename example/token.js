
export function getToken() {
  var MD5 = new Hashes.MD5;
  var token = MD5.hex(formatDateForToken(new Date()));
  return token;
}

export function formatDateForToken(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
