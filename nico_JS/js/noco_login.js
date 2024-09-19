// const title = document.querySelector(".hello h1");

// function titleResult(){
//     const currentColor = title.style.color;
//     let newColor;
//     if (currentColor === 'blue'){
//         newColor = 'tomato';
//     } else{
//         newColor = 'blue';
//     }
//     title.style.color = newColor;
// }
// function handleMouseEnter(){
//     title.innerText='와 마우스에 커서를 갖다대었군!'
// }
// function handleMouseLeave(){
//     title.innerText='마우스 커서가 떠났어!'
// }
// function BodyResizebgColor(){
//     document.body.style.backgroundColor='blue';
// }
// function CopyCode(){
//     alert('화면복사를 하셨구나?')
// }
// function OfflineWifi(){
//     alert('와이파이 연결이 끊겨있어요.');
// }
// function onlineWifi() {
//     alert('다시 와이파이가 연결 됐엉');
// }
// title.addEventListener('click', titleResult);
// title.addEventListener('mouseleave',handleMouseLeave);
// title.addEventListener('mouseenter',handleMouseEnter);
// window.addEventListener('resize',BodyResizebgColor);
// window.addEventListener('copy',CopyCode);
// window.addEventListener('offline',OfflineWifi);
// window.addEventListener('online',onlineWifi);

// const Color = document.querySelector(".hello h1");
// function ColorChange(){
//     clickedClass = 'active'
//     if (Color.classList.contains(clickedClass)){
//         Color.classList.remove(clickedClass);
//     } else{
//         Color.classList.add(clickedClass);
//     }
// }
// Color.addEventListener('click', ColorChange);

// const Color = document.querySelector(".hello h1");
// function ColorChange(){
//     Color.classList.toggle("active");
// }
// Color.addEventListener('click', ColorChange);

//로그인 기능

const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';// css에 hideen 클래스를 두번이상 사용하기 때문에 변수로 저장
const USERNAME_KEY = 'username'; // 위와 같음.


function onLoginSubmit(event) {// 사용자가 input란에 사용자명을 입력하고 버튼을 누르면 호출
  event.preventDefault();// inputForm에 기본동장을 없애줌.
  const username = loginInput.value;// username변수에 input란에 입력한 값을 저장.
  localStorage.setItem(USERNAME_KEY, username);//key value를 지정.
  loginForm.classList.add(HIDDEN_CLASSNAME);//loginForm classList에 'hidden' class를 추가.
  greetingPaint(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);//로컬 스토리지에 있는 username에 키값을 대입

function greetingPaint (username) {
  greeting.innerText = `Hello, ${username}`;//greeting에 해당되는 html 요소에 hello 텍스트를 넣음. 
  greeting.classList.remove(HIDDEN_CLASSNAME);//'hidden' 클래스를 지워서 화면에 보이게 함.
}

if (savedUsername === null) {//로컬 스토리지에 값이 없으면 발동
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

} else{//위와 반대
  greetingPaint(savedUsername);
}
