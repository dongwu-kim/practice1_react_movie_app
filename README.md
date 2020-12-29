<h2 align="center">first practice </br>
처음 만들어본 react & markdown</h2>

<h3 align="center">고수들은 볼 필요 없습니다!</h3>
  
### 목차
- 1. Components</br>
    1.1 Father - Child?
- 2. Dynamic Components (function-components basic)</br>
    2.1 Array, map() ? 그게 뭔데 ? </br>
    2.2 Father 내 img 태그 작성법 </br>
    2.3 id-key **(map())**</br>
    2.4 prop-types</br>
- 3. Class & State</br>
    3.1 Class ? 그게 뭔데요?</br>
    3.2 이것만 가지고 끝일까? **Method 소매넣기!**</br>
    3.3 Class & Method</br>
    3.4 State</br>
      - state, setState() : 서론(skip하셔도 됩니다.)
      - state(), setState() : render()의 재실행(main)

1.  Components

- HTML을 반환하는 함수
- JSX looks like HTML+JS
- JSX 활용, index.js render내 `<APP />` 등으로 표현
- index.js 내에서는 하나의 component를 render한다. -> App
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

2.  Dynamic Components (function-components basic)

- Components를 Copy & Paste로 작성할 수는 없습니다.

  > 물론 그러한 작성방식이 문제가 되는 것은 아닙니다. 그러나, 상대적으로 아름다운 코드를 작성하고 싶고, 유지보수를 쉽게 하기 위한 방법을 생각한다면 중복이 많은 Code는 지양해야 합니다. (메서드의 경우는 처리하는 이벤트에 따라 달라지지만 ㅠㅠ)

- 이에 우리는 새로운 방식으로 Code를 작성할 줄 알아야 합니다.

  - 2.1 Array, map() ? 그게 뭔데 ?

    - 먼저 Array에 대해서는 자세한 설명을 생락한다. 자료구조에 대한 이해는 나중에 따로 Java를 다루며 설명할 수 있는 기회를 마련하고자 합니다.

      > 다만 쉽게 생각하자면, 일종의 자료**보관함**이라고 생각하면 됩니다. 우리가 사용하고자 하는 Data를 언제든 꺼내쓸 수 있고, 보관함 자체를 하나의 Data로 활용하고 싶다면 당연히 그럴 수 있습니다!

    - 그렇다면 이러한 Array는 어디에 활용될까? 방금 써져 있듯, 우리는 `map()`이라는 기가 막힌 메서드를 호출하여 보관함의 역할을 보다 더 가시적으로 이해할 수 있게 될 것입니다.

    - 2.1.1 `map()`, `forEach()` ? 뭘 써야 할까 ?

      우선 용어의 혼용을 이해하기 위해 앞으로 우리가 정의한 함수, 즉 JSX 방식을 적용한 App.js 내의 함수들은 Class를 가지지 않기 때문에 함수라고 표현하겠습니다.

      그러나 우리가 내장함수를 불러올 경우에는 **메서드**라는 표현을 활용할 것이기 때문에, 글을 이해하기 어렵다면 쉽게 아, 이건 다른 사람들이 만들어놓은 함수구나!(라이브러리 내장함수) 하고 생각하면 됩니다.

      이전 Vanilla JS를 공부했던 때에 나는 `forEach()`와 `map()`을 활용한 경험이 거의 없습니다. 애초에 웹 디자인 측면에 조금 더 치우친 공부를 하다 보니 Array 요소 모두에 같은 메서드를 적용시키더라도 조금씩 세밀하게 컨트롤을 했어야 했고, 그냥 생각하는 힘을 기르기 위해서라도 **for문을 활용한 반복문**등을 극한으로 활용했습니다.

      자, 서론이 길어졌지만 map()에 대해 얘기해봅시다, 방금도 말했듯 우리는 forEach()와 map()을 동일선상에 놓는 오류에 빠질 수 있습니다. 하지만, 엄연히 말하자면 이 둘은 같은 역할을 하는 것 처럼 보이지만 전혀 다른 메서드라고도 볼 수 있습니다.

      forEach()의 경우 Array 내부 각 요소에 대한 콜백함수가 실행된 후 리턴값이 없기에 **수정**의 기능을 하는 메서드입니다.

      map()의 경우 콜백을 모든 요소에 수행한 뒤, 동일한 크기를 가지는 배열을 결과로 반환하는 **재생성**기능의 메서드입니다.

      즉, 두 메서드는 `console.log()`에서는 같은 기능처럼 보이지만 엄연히 원본에 대한 보존이 되느냐, 아니느냐 라는 차이를 가지게 됩니다.

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

      속도에 있어 map()은 forEach()에 비해 70%정도 빠릅니다.

      이건 참 아이러니하지 않은가요? 분명, 콜백을 실행하고, 새로 배열을 창조한 다음 반환까지 하는데 왜 map()이 더 빠를까요?

      > 그 이유는 forEach()의 경우 **수정**의 과정을 거치기 때문이라는 생각이 들었습니다.

      그렇다면 이러한 과정을 1번, 2번이 아닌 1억번을 사용해야 한다는 생각을 한다면 누구나 map()을 사용해야 하는 것이 바람직하지 않을까요?

      - 그러나 엄연히 그런 것은 아닙니다. map()은 말했다시피 원본의 보존이 이루어짐과 동시에 새로운 **배열**을 만들어내기 때문에 **수학적 계산이 필요한 부분에 있어서는 결과를 배열이 아닌 숫자로 반환할 수 있는 forEach()를 활용하는 것이 좋습니다.**

      - 주의해야 할 점은 forEach()의 경우 **반환값이 없기 때문에** 콜백의 계산값을 연속적으로 사용하기 위해서는 새로운 변수에 계산된 값을 return하거나, 모든 콜백체인(또는 프로미스), 외부함수 내부에서 원본 Array를 사용해야만 합니다.

      map()은 매번 새로운 배열을 생성하기 때문에 위와 같은 문제는 없으나, 반대로 retrun이 없을 경우 당연하게도 메서드 자체가 휘발성을 가집니다.

      또한, map()의 경우 새로운 Array를 창조하기 때문에 메모리가 할당된다는 점을 유의해야 합니다. 이는 수많은 트래픽을 감당해야 하는 경우에 특히 고려해야하는 문제입니다.

      - JS에서 주의해야 할 사항

        > `map(), forEach()` 모두 고급스러운 방식의 for문이라 봐도 무방합니다. 우리는 이 메서드를 자주 이용하고, 또 사랑하고 있죠.

        문제는 우리가 해당 메서드를 반응형 웹이나, 동적인 애니메이션을 제작할 때 항상 사용하게 된다는 점에서 시작됩니다.

      - 객체참조? 대체 나한테 왜 그러는데?

        JS는 안타깝게도 map(), forEach() 어느 메서드건 간에 Object로 요소가 구성된 Array에 대한 배려를 하지 않습니다.(뛰어난 웹을 위해서인데 DOM elements Array를 이렇게 불편하게 한다고?)

        심지어 우리의 구세주인 const 선언 따위로는 **객체참조**를 막을 수 없다는 점에서 우린 절망하게 됩니다. (property 내용은 수정이 가능하고, property 항목 추가를 할 수 없을 뿐이다.)

        > 이에 웹 개발 시에 map()을 사용할 때는 반드시 새로운 배열을 가지는 변수를 지정해줍시다.

        > 예1)

        ```javascript
        const arr = [{greeting:`hi`, text:`i'm dongwu`},];
        const newArr = arr.map((obj)=> {
          retrun obj.greeting = `good morning`;
        })
        ```

        위와 같이 새로운 배열을 만들어주지 않는다면, 아마도 당신은 원본 배열의 property 변화를 실시간으로 경험할 수 있을 것입니다. 🧔

        그게 아니더라도, 저런 습관을 들이면 언제든 꼬일 일은 없을 거야! (셀프다짐)

  - 2.2 Father 내 img 태그 작성법

    > alt 지정을 꼭 해주도록 합시다.

    alt의 존재이유는 image를 랜더링할 수 없을 때의 설명으로 생각하면 됩니다.

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

    > React 에서 key prop problem을 해결하기 위한 방법으로, Array 내 Object value로 각 객체별 id를 할당해주고, Child의 prop 할당으로 key를 할당해주는 것입니다.

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

    > 우리는 종종 components의 prop과 관련한 실수를 저지를 수 있으니, 우리보다 더 명석한 두뇌를 가진 컴퓨터의 힘을 빌리기로 합시다.

    지금 소개할 prop-types의 경우 npm, yarn으로 설치할 수 있는데, 자세한 설치방법에 대한 내용은 [npmjs] (https://www.npmjs.com/package/prop-types) 를 참고합시다.

    prop-types의 경우 우리가 저지를 실수에 대해 체크하고, 조언해주는 역할이라고 생각하면 됩니다. 다른 파일에서 작성하던 components에 대한 에러를 줄이고자 한다면, 당장 까는게 좋을 정도로 말이죠. 🙆‍♂️🙆‍♂️

    prop-types에 대한 예찬은 여기까지 하고, 자세한 내용은 리액트의 공식문서를 참조해봅시다. 친절한 리액트는 Vanilla와 달리 공식문서화가 아주 잘 되어 있다는 것이 큰 장점이니까!

    [prop-types] (https://ko.reactjs.org/docs/typechecking-with-proptypes.html)

3.  Class & State

- 하드 코딩한 Data가 아닌 동적인 Data, 즉 변하는 Data를 다룰 때 우리는 State를 활용하게 됩니다.

- 동적인 Data는 어렵게 생각하지 말자. 사라지고, 생겨나고, 값이 변하거나, 수가 늘어나거나 하는 그런 모든 Data를 의미합니다.

- 근데 이런 State를 활용하기 위한 최소한의 요구사항이 뭘까? 그건 지금부터 차차 알아볼까요?

  - 3.1 Class ? 그게 뭔데요?

    > 리액트를 처음 배우고, 기존 프로그래밍 개념이라고는 아무것도 머리에 없는 프로그래밍 신생아 상태로 시작한다는 상황에서 떠올려봅시다.

    Class라는건 사전적 의미 그대로 생각하면 됩니다. 그냥 **구분**이라고 말이죠. 말하면서 따라해볼까요?

    ㅋㅋ 너무 허무맹랑한가요?

    그럼 다시,

    ```javascript
    class A extends Alphabet {}
    ```

    이건 어떤가요? 우리는 extends를 from, class를 지시대명사(this) 정도로 생각해보는게 더 쉬울지도 모르겠네요. 이러한 개념들을 쉽게 눈에 보이는대로 이해할 수 있게 만들어진 프로그래밍 언어의 축복을 한껏 누려봅시다!

    > this letter 'A' from the Alphabet 이런 식으로 말이죠.

    더 어려워졌다면 어쩔 수 없지만, 아무튼 이러한 예시를 통해 우린 class와 extends 뒤에 오는 것들이 어떤 관계인지를 어렴풋이 알 수 있지 않을까요?

    떠올려봅시다. Components, 그것도 제일 먼저 사용해봤던 function components를요.

    그렇다면 바로!

    `class Child extends Father` 함수형과는 조금 다른 형태를 갖는 또 하나의 Components가 완성된 것을 알 수 있습니다.

    어떤가요? 결국 다른 방법을 사용하는 것 뿐이고, 우린 Components를 만드는 2가지 방법에 대해 벌써 알게 되었죠?

  - 3.2 이것만 가지고 끝일까? **Method 소매넣기!**

    > `class Child extends Father` 자, 이러한 기본형을 알게 되었으니 이제 본격적인 코딩을 시작해봅시다.

    ```javascript
    class App extends React.Component {
      render()
    }
    ```

    위 코드부터 차근차근 적어보자. 근데 적다보니, 처음보는 녀석이 있는데다가, 우린 이 녀석을 정의한 적 조차 없었죠.
    `render()` 바로 이 녀석 말입니다.

    2장에서도 말했듯 우리가 직접 정의한 적 없고, 라이브러리나 다른 Class에서 정의한 함수를 불러온다면 명칭이 무엇이라고 했었죠?

    네, 바로 **method, 메서드**입니다. 그럼 이 녀석은 함수가 아니냐고 물어볼 수 있지만, 엄연히 명칭을 구분하는 것을 자주 연습하는 것이 좋지 않을까요? 의사소통은 하나의 단어를 듣고 양측에서 같은 것을 연상할 수 있을 때 가장 효율적이니까요.

    그럼 우린 이 method(), `render()`를 어디서 가져온 것일까요? 바로 extends(=from) React.Component(=father)에 존재하는 메서드입니다.

    🙋‍♂️하나만 넣어줬을 뿐인데, 이러한 기능을 제공해준다면 안 쓸 이유가 없겠죠?

    그럼 용어는 설명이 다 된 것 같으니 본격적인 State 활용을 위한 글로 넘어가봅시다.

  - 3.3 Class & Method

    > 둘의 조합이 기가 막히겠죠?

    ```javascript
    class App extends React.Component {
      render() {
        return <h1>Hello, world</h1>;
        // return은 직접 넣어주어야 한다.(명심할 것)
      }
    }
    ```

    3.1장과 3.2장의 장황한 글을 제외한 다음, 코드만 조합해도 위와 같이 class components를 만드는 데 우리는 한 발 다가서게 됩니다.

    그리고 우린 본격적으로 HTML을 가상 DOM을 활용하여 구축하는 신기술에 접근할 수 있게 되는 것이죠.

    > 사실 Class components는 실무에서 유지, 보수용 개념으로만 생각해는 것이 좋다고들 합니다. 최신 개발에서는 함수형 components를 선호하기 때문이죠 ㅠㅠ 그래도 알아두면 좋잖아!!

  - 3.4 State

    > 기다리고 기다리던 대망의 그 part! 이 긴 여정의 **이유인 녀석**

    State, 이게 뭐라고 이렇게까지 계속 말하는 걸까?
    별거 없습니다. 그냥 단순한 Object, 말 그대로 상태를 내포하고 있는 Object입니다.

    ? 그럼 뭐하러 이렇게 열심히 Class와 Method를 설명할까요?

    자,

    ```javascript
    class App extends React.Component {
      state = {
        num: 0,
      };
      plus = () => {
        this.setState({ num: this.state.num + 1 });
      };
      minus = () => {
        this.setState({ num: this.state.num - 1 });
      };
      render() {
        return (
          <div>
            <h1>Hello, world</h1>
            <h1>number_counter : {this.state.num_Count}</h1>
            <button onClick={this.plus}>Plus</button>
            <button onClick={this.minus}>Minus</button>
          </div>
        );
      }
    }
    ```

    이렇게만 틱 올려놓으면 갑자기 모르던게 막 생겨났죠?
    저와 함께 차근차근 공부해봅시다.

    - this. 이게 뭔가요?

      > this는 클래스 내에 지정된 state를 지시하는겁니다. 이를 대비해 2장에서 child의 class를 뭐라고 생각하라고 했었죠? 맞아요. 지시대명사 (this) 라고 미리 생각을 해두라고 말씀드렸었습니다.

    - state, setState() : 서론(skip하셔도 됩니다.)

      > `setState()`가 등장하기 이전, 우리는 state의 내용을 바꿀 수 없어 좌절하던 시간을 보냈을 겁니다.

      근데, 왜 state 내용을 그냥 바꾸는 수식을 넣지 않고 `setState()` 메서드를 활용해야만 할까요?

      먼저, state가 정의되고, {num = 0}이라는 obj(Object)를 가지게 된 다음 render()는 가상 DOM 환경에서 HTML DOM을 구축합니다. 이러한 구축 과정을 rendering 이라고 합니다. 다들 들어보셨나요?
      **redering에 대해 더 알고싶으시다면 구글 검색창을 애용해보세요**
      keyword ) HTML CSS Js load
      keyword ) SSR, CSR

      이후 가벼움과 빠른 속도를 자랑하듯 index를 통해 여러분들이 원하는 것을 viewport에 띄워줄겁니다.(이 과정을 담당하는 언어가 React기 때문에 우리는 React를 MVC 중 V로 판단하기도 하죠)
      **이 부분을 제가 진하게 표시하는 이유는 Flux와 MVC 간에 논쟁과는 별개로 저는 React가 분명히 View의 역할을 한다고 생각하기 때문입니다.**

      > DOM(Document Object Model) = div, h1 등등...

      잠시 다른 방향으로 이야기가 새었는데, 이는 엄연히 제 공부방법이니 이해하시기 바랍니다.

      자 그럼 대충 이러한 내용은 집어치우고, 다음 실속있는 내용을 설명하도록 해볼게요.

    - state(), setState() : render()의 재실행(main)

      > 이전 내용은 잠깐 묻어두세요! 그리고, 코드가 너무 위에 있으니 다시 가져오도록 하죠.

      ```javascript
      class App extends React.Component {
        state = {
          num: 0,
        };
        plus = () => {
          this.setState({ num: this.state.num + 1 });
        };
        minus = () => {
          this.setState({ num: this.state.num - 1 });
        };
        render() {
          return (
            <div>
              <h1>Hello, world</h1>
              <h1>number_counter : {this.state.num_Count}</h1>
              <button onClick={this.plus}>Plus</button>
              <button onClick={this.minus}>Minus</button>
            </div>
          );
        }
      }
      ```

      우리는 `render()`녀석이 작동하는 원리에 대해 생각해볼 필요가 있습니다. 왜 state를 수정하는 데 있어 `setState()`를 강제할까요?

      그 이유는 바로 생성 단계에서 구축한 이후 state 내부의 {value} 변화를 **얼렁뚱땅** 바꾸게 할 수 없기 때문이에요. **이게 무슨 말이냐구요? 그런 언어는 들어도 본 적 없다구요?**

      네, 맞아요. 들어본 적 없으시겠지만 React는 이런 부분에 있어 상당히 엄격하고, **똑똑한** 언어랍니다.

      `setState()` 메서드는 그를 위해 만들어진 메서드라고 보시면 될 것 같아요. 쉽게 얘기하면 가상 환경에서의 refresh라고 보면 될까요?

      `render()` 메서드는 분명 처음(초기화단계)에 선언했던 state를 기반으로 가상 DOM 환경에서 다양한 것들을 창조했을거에요. 그리고 그 결과화면은 JS에서 설정했던 ScreenInit과도 같은 맥락이죠.(DOM 수정이 가장 먼저 이루어진 초기 화면)

      이후 초기 state를 기반으로 창조된 환경에서 render()는 state의 변화에 따라 다시 페이지를 re-rendering 합니다.
      그런데 이 변화를 시시각각 즉각적으로, **동기처리**한다면 어떤 결과가 벌어질까요?

      심지어 내가 다루는 이벤트가 100개, 200개, 1000개가 넘어가는 순간에는요?

      엄청난 re-rendering의 늪에서 헤어나오기 어려울겁니다.
      그리고 이는 다시 말하자면 여러 수식어로 표현할 수 있겠죠. 그리고 우리의 페이지는 **성능이 심각하게 떨어지는, 데이터 폭탄을 선사하는, 존재 자체가 브라우저에게는 암덩어리** 등의 수식어를 가지게 될겁니다.

      그래서 우리의 React는 이러한 부담을 사용자와 브라우저 모두에게 선사하지 않기 위해 자신이 희생한다고 생각하시면 될 것 같아요.

      먼저, React는 Elements들에게 처음부터 나서지 말고, `setState()` 메서드를 기다리라고 명령합니다. 이를 다시 말하면, **비동기처리**라고 표현할 수 있겠죠. 이 명령에 의해 `render()`가 가상 DOM에서 만들어낸 다양한 초기의 이벤트 담당 Elements들은 `setState()` 메서드가 실행되기만을 **간절히 바라는** 상태가 되는겁니다.

      기다림을 꾹 참고 누군가를 만나러 갈 때, 우리는 많은 것들을 준비할 수 있을겁니다. 상대방(User)을 기쁘게 할 수 있도록 말이죠.

      이 과정을 React는 내부에서 통제하고 있는겁니다. 기다림이 끝나는 `setState()` 메서드의 실행 순간! 단 한 번의 `render()`를 통해 하나, 둘, 혹은 훨씬 더 많은 변화가 이루어지도록 말이죠.

      불필요한 Rendering의 억제는 무엇을 의미할까요? 맞아요. 우린 이렇게 아무것도 하지 않고, setState() 메서드만 사용했을 뿐인데 벌써 렌더링 억제를 활용해 앱 성능을 개선했네요.

      > 잠시 JS 시절의 기억을 떠올릴까요? 성능개선을 위해서 우리는 분명 reflow, repaint를 멀리하는 최적화를 구상하고는 했었습니다. event에 해당하는 것은 reflow로 다양한 DOM, CSSOM에 직접적으로 간섭하여 layout의 re-rendering을 발생시키고는 했었죠.

      > repaint를 개선하기 위해서는 어땠었나요? display:none, opacity:0 등과 같이 처음부터 안보이는 상태로 지정한 다음, 이벤트 발생 시에만 가시적일 수 있도록 CSSOM을 수정했었죠?

      이러한 것과 마찬가지로, 렌더링 개선은 최적화에 있어 정말 중요한 요소죠. 이를 React는 메서드 하나로 일축시킬 수 있는 환경을 제공하는겁니다.

      setState()와 render() 메서드의 환경에 대한 공부는 따로 진행하도록 하고, 분명하고 간결하게 말씀드리자면 setState()는 render와 달리 가상DOM 환경에서 트리거되는 메서드가 아니라는 것만 이해하고 계시면 됩니다.
