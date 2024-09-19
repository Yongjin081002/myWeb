const btn = document.querySelector('button');
const h1 = document.querySelector('h1');


/* btn 요소를 클릭했을 때 색상변경 이벤트 추가 */
btn.addEventListener('click', () => {
    const newColor = randomRGB();
	/* randomRGB() 함수는 임의로 색상을 추출하는 함수 */
  
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
  	/* 
    1. h1의 텍스트를 바디색상에 적용되는 RGB 요소의 값으로 표시 
    2. append() 메서드를 사용하면, 기존 텍스트에 추가로 삽입되기에 innerText로
    	기존 텍스트를 덮어 씌웁니다.
    */
});


function randomRGB() {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    return `rgb(${rColor},${gColor},${bColor})`;
    /*
   1. 색상(rgb) 값을 임의로 추출하기 위해 난수를 생성해서 rgb에 템플릿으로 대입합니다.
   2. 256을 곱셈한 이유는, 255를 곱셈하면 254까지만 숫자가 표현되기 때문.
   3. 코드량이 길고 재 사용할 수 있는 코드이기 때문에 따로 함수를 만들어서 색상값을 반환합니다.
   */
}