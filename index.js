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
    fetch(url)
      .then(statusCheck)
      .then(res => res.json())
      .then(addActivity)
      // TODO: change this to something useful
      .catch(handleError);
  }

  function addActivity(obj) {
    let activity = obj.activity;
    let para = document.createElement('p');
    para.textContent = activity;
    document.getElementById("activity").appendChild(para);
  }

  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  function handleError(err) {
    let para = document.createElement('p');
    para.textContent = err;
    document.getElementById("activity").appendChild(para);
  }

})();