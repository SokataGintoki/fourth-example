'use strict';

function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
  }

  console.log(amountOfPages(25));
  console.log(amountOfPages(17));
  console.log(amountOfPages(1095));
  console.log(amountOfPages(445));
  console.log(amountOfPages(888));
