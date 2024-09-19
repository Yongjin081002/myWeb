const btn = document.querySelector(".random_btn");
const text = document.querySelector(".box div:first-child");
const foodList = ['볶음밥','야채죽','치킨','햄버거']; 

function Btn () {
    const num = Math.floor(Math.random() * foodList.length);
    console.log(num);
    text.innerHTML = foodList[num];
}
