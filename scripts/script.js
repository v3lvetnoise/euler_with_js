'use strict'

function show_solution_1() {
  var sum = 0;
  for (var i = 0; i <= 1000; i++) {
    if ( i % 3 == 0 || i % 5 == 0 ) {
      sum += i;
    }
  }
  var message = "The sum of all numbers dividable by 3 or 5 is: " + sum;
  display_solution("solution_1", message);
}

function show_solution_2() {
  var sum = 0;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  var limit = 4000000;

  while (fib[0] <= limit) {
    if (fib[0] % 2 == 0) {
      sum += fib[0];
    }
    fib[2] = fib[1]; //Temporary value
    fib[1] += fib[0];
    fib[0] = fib[2];
  }
  var message = 'The sum of all even numbers (which are not exceed four million) of Fibonacci sequence is: ' + sum;
  display_solution("solution_2", message);
}

function display_solution(section_id, message) {
  var section = document.getElementById(section_id);
  var element = document.createElement('p');
  element.innerHTML = message;
  section.appendChild(element);
  section.style.display = "block";
}
