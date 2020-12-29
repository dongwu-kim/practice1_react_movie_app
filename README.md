<h2 align="center">first practice </br>
처음 만들어본 react & markdown</h2>
  
### 용어 & 이해

1.  Components

- HTML을 반환하는 함수
- JSX looks like HTML+JS
- JSX 활용, index.js render내 `<APP />` 등으로 표현
- index.js 내에서는 하나의 component를 render한다. -> App
- 위를 위반하지 않기 위해 App.js 내에 component를 추가한다.

  > `import sth from "./sth"` 등의 방법으로 App.js에 추가한다.</br>모듈화를 직접 구현해야 하는 js에 비해 상당히 편하다(?)

  - 1.1 Father - Child?

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

2.  Dynamic Components

- Components를 Copy & Paste로 작성할 수는 없다.
  > 물론 그러한 작성방식이 문제가 되는 것은 아니다. 그러나, 상대적으로 아름다운 코드를 작성하고 싶고, 유지보수를 쉽게 하기 위한 방법을 생각한다면 중복이 많은 Code는 지양해야 할 것이다. (메서드의 경우는 처리하는 이벤트에 따라 달라지지만 ㅠㅠ)
- 이에 우리는 새로운 방식으로 Code를 작성할 줄 알아야 한다.

  - 2.1 Array, map() ? 그게 뭔데 ?

  - 먼저 Array에 대해서는 자세한 설명을 생락한다. 자료구조에 대한 이해는 나중에 따로 Java를 다루며 설명할 수 있는 기회를 마련하고자 한다.

    > 다만 쉽게 생각하자면, 일종의 자료**보관함**이라고 생각하면 된다. 우리가 사용하고자 하는 Data를 언제든 꺼내쓸 수 있고, 보관함 자체를 하나의 Data로 활용하고 싶다면 당연히 그럴 수 있다!

  - 그렇다면 이러한 Array는 어디에 활용될까? 방금 써져 있듯, 우리는 `map()`이라는 기가 막힌 메서드를 호출하여 보관함의 역할을 보다 더 가시적으로 이해할 수 있게 될 것이다.

  - 2.1.1 `map()`, `forEach()` ? 뭘 써야 할까 ?

    우선 용어의 혼용을 이해하기 위해 앞으로 우리가 정의한 함수, 즉 JSX 방식을 적용한 App.js 내의 함수들은 Class를 가지지 않기 때문에 함수라고 표현하겠다.

    그러나 우리가 내장함수를 불러올 경우에는 **메서드**라는 표현을 활용할 것이기 때문에, 글을 이해하기 어렵다면 쉽게 아, 이건 다른 사람들이 만들어놓은 함수구나!(라이브러리 내장함수) 하고 생각하면 될 것이다.

    이전 Vanilla JS를 공부했던 때에 나는 `forEach()`와 `map()`을 활용한 경험이 거의 없다. 애초에 웹 디자인 측면에 조금 더 치우친 공부를 하다 보니 Array 요소 모두에 같은 메서드를 적용시키더라도 조금씩 세밀하게 컨트롤을 했어야 했고, 그냥 생각하는 힘을 기르기 위해서라도 **for문을 활용한 반복문**등을 극한으로 활용했다.

    자, 서론이 길어졌지만 map()에 대해 얘기해보자, 방금도 말했듯 우리는 forEach()와 map()을 동일선상에 놓는 오류에 빠질 수 있다. 하지만, 엄연히 말하자면 이 둘은 같은 역할을 하는 것 처럼 보이지만 전혀 다른 메서드라고도 볼 수 있다.

    forEach()의 경우 Array 내부 각 요소에 대한 콜백함수가 실행된 후 리턴값이 없기에 **수정**의 기능을 하는 메서드이다.

    map()의 경우 콜백을 모든 요소에 수행한 뒤, 동일한 크기를 가지는 배열을 결과로 반환하는 **재생성**기능의 메서드이다.

    즉, 두 메서드는 `console.log()`에서는 같은 기능처럼 보이지만 엄연히 원본에 대한 보존이 되느냐, 아니느냐 라는 차이를 가지게 된다.

    > **그렇다면 랜더링 개선에 있어 map()과 forEach()중 어떤 것이 최적화에 있어 유용할까?**

  - 2.1.2 `forEach() & map()`의 사용처

    <!--
               | forEach()                     | map()                              |
               | ----------------------------- | ---------------------------------- |
               | Array 요소 인덱스로 호출      | Array 요소 인덱스로 호출           |
               | 해당 요소 콜백 적용           | 해당 요소 콜백 적용                |
               | 해당 요소 인덱스로 Array 호출 | 새로운 Array 내 동일 인덱스에 반환 |
               | Array 요소 콜백요소로 수정    | 배열 길이만큼 반복                 |
               | output = 수정된 요소의 값     | Array로 전체 결과를 반환           |
               | 배열 길이만큼 반복            |                                    |-->

    속도에 있어 map()은 forEach()에 비해 70%정도 빠르다.

    이건 참 아이러니 하지 않은가? 분명, 콜백을 실행하고, 새로 배열을 창조한 다음 반환까지 하는데 왜 map()이 더 빠를까?

    > 그 이유는 forEach()의 경우 **수정**의 과정을 거치기 때문이라는 생각이 들었다.

    그리고 이러한 과정을 1번, 2번이 아닌 1억번을 사용해야 한다는 생각을 한다면 누구나 map()을 사용해야 하는 것이 바람직하지 않을까?

    - 그러나 엄연히 그런 것은 아니다. map()은 말했다시피 원본의 보존이 이루어짐과 동시에 새로운 **배열**을 만들어내기 때문에 수학적 계산이 필요한 부분에 있어서는 결과를 배열이 아닌 숫자로 반환할 수 있는 forEach()를 활용하는 것이 좋다.

    - 주의해야 할 점은 forEach()의 경우 **반환값이 없기 때문에** 콜백의 계산값을 연속적으로 사용하기 위해서는 새로운 변수에 계산된 값을 return하거나, 모든 콜백체인(또는 프로미스), 외부함수 내부에서 원본 Array를 사용해야만 한다.

      map()은 매번 새로운 배열을 생성하기 때문에 위와 같은 문제는 없으나, 반대로 retrun이 없을 경우 당연하게도 메서드 자체가 휘발성을 가진다.

      또한, map()의 경우 새로운 Array를 창조하기 때문에 메모리가 할당된다는 점을 유의해야 한다. 이는 수많은 트래픽을 감당해야 하는 경우에 특히 고려해야하는 문제다.

    - JS에서 주의해야 할 사항

      > `map(), forEach()` 모두 고급스러운 방식의 for문이라 봐도 무방하다. 우리는 이 메서드를 자주 이용하고, 또 사랑하고 있다.

      문제는 우리가 해당 메서드를 반응형 웹이나, 동적인 애니메이션을 제작할 때 항상 사용하게 된다는 점에서 시작된다.

    - 객체참조? 대체 나한테 왜 그러는데?

      JS는 안타깝게도 map(), forEach() 어느 메서드건 간에 Object로 요소가 구성된 Array에 대한 배려를 하지 않는다.(뛰어난 웹을 위해서인데 DOM elements Array를 이렇게 불편하게 한다고?)

      심지어 우리의 구세주인 const 선언 따위로는 **객체참조**를 막을 수 없다는 점에서 우린 절망하게 된다. (property 내용은 수정이 가능하고, property 항목 추가를 할 수 없을 뿐이다.)

      > 이에 웹 개발 시에 map()을 사용할 때는 반드시 새로운 배열을 가지는 변수를 지정해주자

      > 예1)

            ```javascript
            const arr = [{greeting:`hi`, text:`i'm dongwu`},];
            const newArr = arr.map((obj)=> {
              retrun obj.greeting = `good morning`;
            })
            ```

      위와 같이 새로운 배열을 만들어주지 않는다면, 아마도 당신은 원본 배열의 property 변화를 실시간으로 경험할 수 있을 것이다. 🧔

      그게 아니더라도, 저런 습관을 들이면 언제든 꼬일 일은 없을 것이다! (셀프다짐)

  - 2.2 Father 내 img 태그 작성법

  > alt 지정을 꼭 해주도록 하자.

  alt의 존재이유는 image를 랜더링할 수 없을 때의 설명으로 생각하면 된다.

  ```javascript
  function Father({ name, peopleImg }) {
    return (
      <div>
        <h2>{name}</h2>
        <h2>
          <img src={peopleImg} alt={name} />
        </h2>
      </div>
    );
  }
  ```

  - 2.3 id-key **(map())**

  > React 에서 key prop problem을 해결하기 위한 방법으로, Array 내 Object value로 각 객체별 id를 할당해주고, Child의 prop 할당으로 key를 할당해주는 것이다.

  ```javascript
  const philoarr = [
  {id: 1, name:name, image: image,},
  {id: 2, name:name, image: image,},
  {id: 3, name:name, image: image,}
  ] //초기 Arr 내에 id 할당
  <Philo name={arr.name} peopleImg={arr.image} key={arr.id} />
  // Child 내에서 prop으로 key 할당
  ```

  - 2.4 prop-types

  > 우리는 종종 components의 prop과 관련한 실수를 저지를 수 있으니, 우리보다 더 명석한 두뇌를 가진 컴퓨터의 힘을 빌리기로 하자.

  지금 소개할 prop-types의 경우 npm, yarn으로 설치할 수 있는데, 자세한 설치방법에 대한 내용은 [npmjs] (https://www.npmjs.com/package/prop-types) 를 참고하자.

  prop-types의 경우 우리가 저지를 실수에 대해 체크하고, 조언해주는 역할이라고 생각하면 된다. 다른 파일에서 작성하던 components에 대한 에러를 줄이고자 한다면, 당장 까는게 좋을 정도로 말이다 🙆‍♂️🙆‍♂️

  prop-types에 대한 예찬은 여기까지 하고, 자세한 내용은 리액트의 공식문서를 참조해보자 친절한 리액트는 Vanilla와 달리 공식문서화가 아주 잘 되어 있다는 것이 큰 장점이니까!

  [prop-types] (https://ko.reactjs.org/docs/typechecking-with-proptypes.html)

3.  Class & State

    -
