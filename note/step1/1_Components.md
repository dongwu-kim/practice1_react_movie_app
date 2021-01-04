1.  Components

- HTML을 반환하는 함수(혹은 클래스)
- JSX looks like HTML+JS
- JSX 활용, index.js render() 메소드 내 `<APP />` 등으로 표현
- JSX가 없다면, `React.createElement()` 메서드로 DOM을 구성해야 합니다. -> 상당히 아름답지 않습니다.
- index.js 내에서는 하나의 component를 render() 합니다. -> App
- 위를 위반하지 않기 위해 App.js 내에 component를 추가합니다.

  > `import sth from "./sth"` 등의 방법으로 App.js에 추가한다.</br>모듈화를 직접 구현해야 하는 js에 비해 상당히 편하다(?)

  - 1.1 Father - Child? (function)

    - `App.js` 내에서 components를 직접 정의한다면,
      function의 형태로 하나의 components를 정의합니다.

    - 그 다음, `function App(){}` 내에서 components를 호출하는데,
      이 때 App() 내에 호출된 components가 바로 Child를 담당합니다.

    - Child components

    > 이러한 components에는 HTML과 동일하게 무제한으로 property를 할당할 수 있는데, **data type**에 상관없이 할당이 가능합니다.
    > 또한, 할당된 property는 다시 외부 function으로 정의된 Father components의 arguments로 반환됩니다.
    > DOM의 형태를 가지고 있기 때문에, `console.log()`로 확인할 수 있습니다..

    - Father components

    > Child에게서 할당받은 components의 property를 활용해 우리는 다양한 작업을 진행할 수 있습니다. -> Js를 떠올려라!

- [Back to Main](../../README.md)
