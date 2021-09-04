"use strict";

const barchart = document.querySelector("#barchart");
const queue = [];

window.addEventListener("DOMContentLoaded", init);

function init() {
  barInit();
  queueSizeLoop();
}

// Initialize 40 <div>s with class .bar and id #bar0-39
function barInit(bars = 40) {
  for (let index = 0; index < bars; index++) {
    let queueSize = getNumberOfCustomers();
    queue.push(queueSize);
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("id", "bar" + index);
    barchart.appendChild(bar);
  }
}

function queueSizeLoop() {
  // Get queueSize and add the data to the model
  let queueSize = getNumberOfCustomers();
  queue.push(queueSize);
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
  queue.forEach((queueSize, index) => {
    document.getElementById("bar" + index).style.height = `${(queueSize / 32) * 100}%`;
  });
}
