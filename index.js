/**
 * Bella Rivera
 * May 5, 2022
 * CSE154 Section AH
 *
 * This is the JavaScript for my CP3 website. It contains all of the functionality.
 * It makes sure that the buttons correspond to the right activity suggestions, and
 * generates activities usingthe Bored API.
 */

"use strict";
(function() {
  window.addEventListener("load", init);
  const BASE_URL = "http://www.boredapi.com/api/activity/";

  /**
   * Sets up the wepage. Initializes all buttons so that they can be clicked,
   * starts activity box as hidden so that the user doesn't see the white border
   */
  function init() {
    let btns = document.getElementsByClassName("activity-btn");
    document.getElementById("activity").classList.add("hidden");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', getActivity);
    }
  }

  /**
   * Based on the button that's clicked, get an activity from the API.
   * Check for and handle errors, process the data.
   */
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
      .catch(handleError);
  }

  /**
   * Create a paragraph element and use it to display the activity on the
   * webpage.
   * @param {object} obj The JSON object that we get from the fetch call
   */
  function addActivity(obj) {
    let activity = obj.activity;
    let para = document.createElement('p');
    para.textContent = activity;
    document.getElementById("activity").appendChild(para);
  }

  /**
   * Checks the success of the fetch call
   * @param {object} res status for the fetch call (200 = ok, 404 = not found, etc.)
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * If there is a problem during the fetch call, display the error on the
   * webpage to inform the user
   * @param {object} err The error that occurred when fetching
   */
  function handleError(err) {
    let para = document.createElement('p');
    para.textContent = err;
    document.getElementById("activity").appendChild(para);
  }

})();