<h2 align="center">first practice </br>
처음 만들어본 react & markdown</h2>
  
### 용어 & 이해

1. Components

   - HTML을 반환하는 함수
   - JSX looks like HTML+JS
   - JSX 활용, index.js render내 `<APP />` 등으로 표현
   - index.js 내에서는 하나의 component를 render한다. -> App
   - 위를 위반하지 않기 위해 App.js 내에 component를 추가한다.

     > `import sth from "./sth"` 등의 방법으로 App.js에 추가한다.</br>모듈화를 직접 구현해야 하는 js에 비해 상당히 편하다(?)

     1.1 Father - Child?

     - `App.js` 내에서 components를 직접 정의한다면,
       function의 형태로 하나의 components를 정의한다.
     - 그 다음, `function App(){}` 내에서 components를 호출하는데,
       이 때 App() 내에 호출된 components가 바로 Child를 담당한다.

       - Child components

         > 이러한 components에는 HTML과 동일하게 무제한으로 property를 할당할 수 있는데, **data type**에 상관없이 할당이 가능하다.
         > 또한, 할당된 property는 다시 외부 function으로 정의된 Father components의 arguments로 반환되어진다.
         > DOM의 형태를 가지고 있기 때문에, `console.log()`로 확인할 수 있다.

       - Father components

         > Child에게서 할당받은 components의 property를 활용해 우리는 다양한 작업을 진행할 수 있다. -> Js를 떠올려라!

2. Dynamic Data

   - Components를 Copy & Paste로 작성할 수는 없다.
     > 물론 그러한 작성방식이 문제가 되는 것은 아니다. 그러나, 상대적으로 아름다운 코드를 작성하고 싶고, 유지보수를 쉽게 하기 위한 방법을 생각한다면 중복이 많은 Code는 지양해야 할 것이다. (매서드의 경우는 처리하는 이벤트에 따라 달라지지만 ㅠㅠ)
   - 이에 우리는 새로운 방식으로 Code를 작성할 줄 알아야 한다.

     1.1 Array, map() ? 그게 뭔데 ?

     - 먼저 Array에 대해서는 자세한 설명을 생락한다. 자료구조에 대한 이해는 나중에 따로 Java를 다루며 설명할 수 있는 기회를 마련하고자 한다.

       > 다만 쉽게 생각하자면, 일종의 자료**보관함**이라고 생각하면 된다. 우리가 사용하고자 하는 Data를 언제든 꺼내쓸 수 있고, 보관함 자체를 하나의 Data로 활용하고 싶다면 당연히 그럴 수 있다!

     - 그렇다면 이러한 Array는 어디에 활용될까? 방금 써져 있듯, 우리는 `map()`이라는 기가 막힌 매서드를 호출하여 보관함의 역할을 보다 더 가시적으로 이해할 수 있게 될 것이다.

       - `map()` 너 뭐니?

       >
