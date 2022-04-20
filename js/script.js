// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function converts farenheit to celsius.
 */
function buttonClicked () {
  // get user input
  let farenheit = parseFloat(document.getElementById('farenheit').value)

  // the conversion happens
  let celsius = 5/9 * (farenheit - 32)

  // display the results
  document.getElementById('celsius').innerHTML = "The converted temperature from Farenheit to Celsius would be " + celsius.toFixed(0) + "°C."
}