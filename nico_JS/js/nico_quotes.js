const quotes = [
    {
    quote: '오늘 미룬일은 미룬이가 처리해준다',
    author: '- 용진'
    },
    {
    quote: '대소고의 미래는 너의 미래와 같다.',
    author: '- 용진'
    },
    {
    quote: '우리는 매일 죽음에 가까워지고 있다.',
    author: 'james yongJin'
    },
    {
    quote: '오늘의 나를 내일의 나에게 맡기지 말고, 내일의 나를 오늘의 나에게 맡겨라.',
    author: 'wisdom Yj'
    },
    {
    quote: '엄마말이 그런거면 그런거다',
    author: '용진 mom'
    },
    {
    quote: '자신의 이상형을 찾기보단, 자신이 남의 이상형이 되어라.',
    author: 'mr.yong'
    },
    {
    quote: '눈을 감아보라아 무엇이 보이는가. 무엇이 보이든 너의 미래이다.',
    author: '김김용용진진'
    },
    {
    quote: '남에게 잘 보이려 하지 말고 남이 나에게 잘 보이게 하게끔 살아라.',
    author: '김진용진'
    },
    {
    quote: '최고의 효는 건강이다',
    author: 'yongjin parents'
    },
    {
    quote: '너의 미래는 스스로 결정해라',
    author: 'unknown'
    },
    ];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const asyQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = asyQuote.quote;
author.innerText = asyQuote.author;