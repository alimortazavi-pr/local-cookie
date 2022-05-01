// Set a Cookie
function set(
  cookieName: string,
  cookieValue: any,
  expDays: number = 30,
  path: string = "/"
) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie =
    cookieName + "=" + cookieValue + "; " + expires + "; path=" + path + ";";
}

// Get a Cookie
function get(cookieName: string) {
  const name = cookieName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

// Remove a Cookie
function remove(cookieName: string) {
  if (get(cookieName)) {
    document.cookie = cookieName + "=;";
  }
}

export default { set, get, remove };
