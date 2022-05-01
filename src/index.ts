// Set a Cookie
export function setCookie(cookieName: string, cookieValue: any) {
  document.cookie = cookieName + "=" + cookieValue + "; ";
}

// Get a Cookie
export function getCookie(cookieName: string) {
  const name = cookieName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export default { setCookie, getCookie };
