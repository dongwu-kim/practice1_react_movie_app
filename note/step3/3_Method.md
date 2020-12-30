3.  [Class & State](3_Class_State.md)

- [Main](../../README.md)

- 현재 장의 노트

  - [3.1 Class](3_Class.md)

  - **3.2 Method**

  - [3.3 Class & Method](3_Class&Method.md)

  - [3.4 State](3_State.md)

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

    그럼 우린 이 method(), `render()`를 어디서 가져온 것일까요?

    바로 extends(=from)

    > React (=father) </br>
    > . (내부 계층을 지목하는 기호입니다. - 안에 있는~)</br>
    > Component (메서드)입니다.</br>

    어때요, 그냥 사람이 하는 말과 똑같은 언어를 React는 제공하고 있다는 것이 확 다가오시나요?

    🙋‍♂️ 거기다 간략하게 이 글자 몇 개 넣어줬을 뿐인데, 다양한 기능을 제공해준다면 안 쓸 이유가 없겠죠?

    그럼 용어는 설명이 다 된 것 같으니 본격적인 State 활용을 위한 글로 넘어가봅시다.
