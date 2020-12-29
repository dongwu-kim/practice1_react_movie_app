import React from "react";

function Father(args) {
  const props = args;
  return <h2>what the {props}</h2>;
}

const propsArr = [
  {
    name: `니체`,
    image: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fgobooki.net%2Fwp-content%2Fuploads%2F2020%2F03%2F%25ED%2594%2584%25EB%25A6%25AC%25EB%2593%259C%25EB%25A6%25AC%25ED%259E%2588-%25EB%258B%2588%25EC%25B2%25B4.png&imgrefurl=https%3A%2F%2Fgobooki.net%2F%25ED%2594%2584%25EB%25A6%25AC%25EB%2593%259C%25EB%25A6%25AC%25ED%259E%2588-%25EB%258B%2588%25EC%25B2%25B4%25EC%259D%2598-%25EC%2583%259D%25EC%2595%25A0%25EC%2599%2580-%25EC%25B2%25A0%25ED%2595%2599-%25EC%25A0%2595%25EB%25A6%25AC%2F&tbnid=v5lVHqFbnHPWrM&vet=12ahUKEwj1ztDW9PHtAhUUx4sBHYoVACAQMygEegUIARDRAQ..i&docid=62vbmfUsh_lDJM&w=668&h=660&q=%EB%8B%88%EC%B2%B4&ved=2ahUKEwj1ztDW9PHtAhUUx4sBHYoVACAQMygEegUIARDRAQ`,
  },
  {
    name: `스피노자`,
    image: `https://www.google.com/imgres?imgurl=http%3A%2F%2Fsunday.joins.com%2F_data%2Fphoto%2F2012%2F07%2F22002349.jpg&imgrefurl=http%3A%2F%2Fblog.daum.net%2Fwindada11%2F8762206&tbnid=XTIKcyURcmcBNM&vet=12ahUKEwijxPzQ9PHtAhUiNaYKHRTbATQQMygDegUIARCqAQ..i&docid=8o7RFdfPQO61uM&w=645&h=630&q=%EC%8A%A4%ED%94%BC%EB%85%B8%EC%9E%90&ved=2ahUKEwijxPzQ9PHtAhUiNaYKHRTbATQQMygDegUIARCqAQ`,
  },
  {
    name: `데카르트`,
    image: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ddanzi.com%2Ffiles%2Fattach%2Fimages%2F977701%2F899%2F362%2F501%2F60a7c61569605aa10df2e40747280480.jpg&imgrefurl=http%3A%2F%2Fwww.ddanzi.com%2FddanziNews%2F501362899&tbnid=BvvP9zFjuQhAZM&vet=12ahUKEwi7hszL9PHtAhW5y4sBHSJXA0kQMygEegUIARC4AQ..i&docid=tvaSYH5uiZ7SZM&w=800&h=452&q=%EB%8D%B0%EC%B9%B4%EB%A5%B4%ED%8A%B8&ved=2ahUKEwi7hszL9PHtAhW5y4sBHSJXA0kQMygEegUIARC4AQ`,
  },
  {
    name: `칸트`,
    image: `https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR720x0%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FTRE%2Fimage%2F_94vkV1VNDb_L5TLRPWxGKbm_20&imgrefurl=https%3A%2F%2Fbrunch.co.kr%2F%40%40TRE%2F1679&tbnid=XTWjvypXcpKnTM&vet=12ahUKEwjHoZHC9PHtAhVBNqYKHSw8BfUQMygAegUIARDSAQ..i&docid=RVMd94TFoKd9xM&w=720&h=628&q=%EC%B9%B8%ED%8A%B8&ved=2ahUKEwjHoZHC9PHtAhVBNqYKHSw8BfUQMygAegUIARDSAQ`,
  },
  {
    name: `프로이트`,
    image: `https://www.google.com/imgres?imgurl=http%3A%2F%2Fmblogthumb4.phinf.naver.net%2F20151006_71%2Fujbymca1_1444094105942jowX1_JPEG%2FSigmund-Freud-2.jpg%3Ftype%3Dw2&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fujbymca1%2F220500837566&tbnid=r4k-FOtY8_6IOM&vet=12ahUKEwiLsJuX9PHtAhVFNqYKHcb6CnAQMygEegUIARDHAQ..i&docid=6HR7vZupoeaohM&w=740&h=1010&q=%ED%94%84%EB%A1%9C%EC%9D%B4%ED%8A%B8&ved=2ahUKEwiLsJuX9PHtAhVFNqYKHcb6CnAQMygEegUIARDHAQ`,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
