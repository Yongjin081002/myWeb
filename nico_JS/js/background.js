// 이미지 파일 이름을 담은 배열
const images = [
    "0.jpeg",
    "2.jpeg"
];

// 배열에서 랜덤하게 하나의 이미지를 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 새로운 img 요소를 생성
const bgimage = document.createElement('img');

// img 요소의 src 속성을 선택된 이미지 파일 경로로 설정
bgimage.src = `./img/${chosenImage}`;

// 생성한 img 요소를 HTML 문서의 body에 추가하여 화면에 표시
document.body.appendChild(bgimage);
