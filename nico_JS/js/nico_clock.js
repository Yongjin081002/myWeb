const clock = document.querySelector('h2#clock');


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');//시간이 2자리가 아니면 0을 붙임
    const min = String(date.getMinutes()).padStart(2,'0');//위와 같음
    clock.innerText = (`${hours}:${min}`);
}
getClock()// setInterval 코드가 1초뒤에 실행되서 먼저 한번 호출
setInterval(getClock, 1000);//1000ms마다 getClock함수 호출