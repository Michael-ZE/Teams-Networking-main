export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`odihnit ${ms / 1000}sec`);
    }, ms);
  });
}

export function $(selector) {
  return document.querySelector(selector);
}


export function debounce(fn, ms) {
   let timer; // closure
    //console.warn("debounce", fn, ms);
    return function (e) {
      console.warn("inner fn", e);
      clearTimeout(timer);
      timer = setTimeout(function () {
        console.info("timeout");
        fn(e); // callback
    }, ms);
}
