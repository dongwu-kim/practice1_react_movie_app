3.  [Class & State](3_Class_State.md)

- [Main](../../README.md)

현재 장의 노트

- [3.1 Class](3_Class.md)

- [3.2 Method](3_Method.md)

- [3.3 Class & Method](3_Class&Method.md)

- **3.4 State**

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

    - state, setState() : render()의 재실행(main)

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

      불필요한 Rendering의 억제는 무엇을 의미할까요? 맞아요. 우린 이렇게 아무것도 하지 않고, setState() 메서드만 사용했을 뿐인데 벌써 렌더링 억제를 활용해 앱 성능을 개선했습니다.

      > 잠시 JS 시절의 기억을 떠올릴까요? 성능개선을 위해서 우리는 분명 reflow, repaint를 멀리하는 최적화를 구상하고는 했었습니다. event에 해당하는 것은 reflow로 다양한 DOM, CSSOM에 직접적으로 간섭하여 layout의 re-rendering을 발생시키고는 했었죠.

      > repaint를 개선하기 위해서는 어땠었나요? display:none, opacity:0 등과 같이 처음부터 안보이는 상태로 지정한 다음, 이벤트 발생 시에만 가시성을 가질 수 있도록 CSSOM을 수정했었죠?

      이러한 것과 마찬가지로, 렌더링 개선은 최적화에 있어 정말 중요한 요소죠. 이를 React는 메서드 하나로 일축시킬 수 있는 환경을 제공하는겁니다.

      setState()와 render() 메서드의 환경에 대한 공부는 따로 진행하도록 하고, 분명하고 간결하게 말씀드리자면 setState()는 render()와 달리 가상DOM 환경에서 트리거되는 메서드가 아니라는 것 까지만 얕게 이해하고 계시면 됩니다.
