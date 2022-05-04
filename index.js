/**
* Bella Rivera
* April 4, 2022
* CSE154 Section AH
*
* This is the JavaScript for my CP2 website. It contains all of the functionality.
* It sets up the boards, flips the cards, counts the matches, and triggers
* the celebration when all the matches have been found.
*/
"use strict";
(function() {
  window.addEventListener("load", init);
  const BASE_URL = "http://www.boredapi.com/api/activity/";

  function init() {
    document.getElementById("activity-button").addEventListener('click', getActivity);
  }

  function getActivity() {
    fetch(BASE_URL)
    	.then(statusCheck)
    	.then(res => res.json())
    	// .then(res => res.text())
    	.then(processData)
      // TODO: change this to something useful
    	.catch(console.log);
  }

  function processData(res) {
    // TODO: process json somehow
    let imgs = res.split('\n');
    let div = id('pictures');
    for (let i = 0; i < imgs.length; i++) {
      let pic = document.createElement('img');
      pic.src = imgs[i];
      div.appendChild(pic);
    }
  }

  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }


 })();