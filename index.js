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
    let btns = document.getElementsByClassName("activity-btn");
    document.getElementById("activity").classList.add("hidden");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', getActivity);
    }
  }

  function getActivity() {
    let btnId = this.id;
    let url;
    if (btnId === "random") {
      url = BASE_URL;
    } else {
      url = BASE_URL + "?type=" + btnId;
    }
    document.getElementById("activity").innerHTML = "";
    document.getElementById("activity").classList.remove("hidden");
    console.log(url);
    fetch(url)
    	.then(statusCheck)
    	.then(res => res.json())
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