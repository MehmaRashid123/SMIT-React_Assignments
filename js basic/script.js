import { skills } from "./app.js";
import { age } from "./app.js";
import name from "./app.js";

console.log(`${name} is ${age} years old and her skills are ${skills[0]} & ${skills[1]}`);

const p = document.createElement("p");
p.textContent = `${name} is ${age} years old and her skills are ${skills[0]} & ${skills[1]}`;

document.body.appendChild(p);
