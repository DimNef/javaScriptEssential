const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak- $7', 'Pasta- 5$', 'Burger- $5 ', 'Salmon- $7'];
const dessertMenu = ['Cake- $5', 'Ice Cream- $1', 'Pudding- $3', 'Fruit Salad- $5'];
const drinksMenu= ["Nefeli's special- $6","Beer- $6"];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
let mainCourseItem = '';
mainCourseMenu.forEach((item,index)=>{
mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0;i< dessertMenu.length;i++) {
    dessertItem += `<p>Item  ${i+1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
let drinksItem=''
const drinksMenuItemsHTML = drinksMenu.map((item,index)=>`<p>Item ${index+1}: ${item} </p>`).join('');
document.getElementById('drinksMenuItems').innerHTML = drinksMenuItemsHTML;

document.getElementById('breakfastTotalItems').innerHTML = breakfastMenu.length;
document.getElementById('maincourseTotalItems').innerHTML = mainCourseMenu.length;
document.getElementById('dessertTotalItems').innerHTML = dessertMenu.length;
document.getElementById('drinksTotalItems').innerHTML = drinksMenu.length;
// ` character  (`) is important 
