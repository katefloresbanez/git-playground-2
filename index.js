"use strict"

import todo, { foo, bar } from './scripts/todo.js'

foo()
bar(2,3)
todo(12, 2)

// mga method pang access ng elements sa DOM
// // selecting single element
// document.getElementById // undefined
// // document.getElementsByName
// // document.querySelector
// // selecting multiple elements
// // document.getElementsByClassName() // HTML Collection []
// // document.querySelectorAll('.red') // Nodelist []
// // document.getElementsByTagName() // HTML Collection []

// //const div = document.getElementById("hello")

// div.textContent = "<div> world </div>" // "<div> world </div>
// div.innerHTML = <div> world </div> // "world"