'use strict';

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Utility functions                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function element(selector, parent = document) {
  return parent.getElementById(selector);
}

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function print(arg) {
  console.log(arg);
}

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  App                                                  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

