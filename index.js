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
      // .then(console.log)
    	// .then(res => res.text())
    	.then(addActivity)
      // TODO: change this to something useful
    	.catch(console.error);
  }

  function addActivity(obj) {
    // TODO: process json somehow
    let activity = obj.activity;
    console.log(obj.activity);
    // console.log("activity = " + activity);
    let p = document.createElement('p');
    p.textContent = activity;
    document.getElementById("activity").appendChild(p);
  }

  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }


 })();