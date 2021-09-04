"use strict";
//variable fyrir tomt div þar sem við búum til tómt array [] sem heitir queue
const barchart = document.querySelector("#barchart");
const queue = [];
// fyrir loop þá búum við til function sem heitir init
window.addEventListener("DOMContentLoaded", init);
//functionið init kallar fram tvör önnur function
function init() {
  barInit();
  queueSizeLoop();
}


//frumstillir 40 súlur, div með class nafni .bar og id #bar0-39
function barInit(bars = 40) {
  //fyrir þetta gerum við breytilegt variable sem núll (núllstilla) þar sem 
  // index er minna en súlurnar og index (tölurnar) telja upp
  for (let index = 0; index < bars; index++) {
    let queueSize = getNumberOfCustomers();
    // tóma arrayið sem við bjuggum til (queue) þar sem við bætum queue size sem er hversu margir 
    //viðskipta vinir eru, við tóma arrayið
    queue.push(queueSize);
    //búum til einfalda súlu, s.s. div sem við köllum bar með class .bar og bætum við id bar með setAttribute auk index
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("id", "bar" + index);
    //setjum nýja divið fyrir allar súlurnar inn í barchart divið með því að nota appendChild
    barchart.appendChild(bar);
  }
}

function queueSizeLoop() {
  // Get queueSize and add the data to the model
  //bætum queueSize sem er númer af viðskiptavinum í tóma arrayið auk þess að shifta 
  let queueSize = getNumberOfCustomers();
  queue.push(queueSize);
  //shift tekur fyrsta elementið úr array í burt og ef maður kallar á það eins og hér þá erum við að biðja um 
  //fyrsta elementið úr arrayinu
  queue.shift();
  updateBar();
  setTimeout(queueSizeLoop, 1000);
}

function getNumberOfCustomers() {
  // FAKE: Not actual data, just returns a random number between 0 and 32
  return Math.floor(Math.random() * 32);
}

// Update bar height
function updateBar() {
  //fyrir hverja og einustu súlu hæð og index sem er það sem við núllstiltum i byrjum og látum telja upp hverja súlu
  queue.forEach((queueSize, index) => {
    // náum við í #bar og index variableið, köllum fram class height í css og skrifum súlu hæð / 32 og margföldum með 100%
    document.getElementById("bar" + index).style.height = `${(queueSize / 32) * 100}%`;
  });
}
