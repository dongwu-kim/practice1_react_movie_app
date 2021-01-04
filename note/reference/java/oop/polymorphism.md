- [Back to Submain](../../head.md)
- [OOP main](../oop.md)

- OOP의 3요소

  - **Polymorphism & Abstraction**
  - [Encapsulation](encapsulation.md)
  - [Inheritance](inheritance.md)

---

1. Polymorphism(다형성)과 Abstraction(추상화)

> Abstraction이라는 말을 보면 뭔가 글자들의 조화도 멋진 것 같고, 발음도 섹시하지 않나요? 심지어 뜻도 날카로워 보이는게 제가 아는 단어 중 최고인 것 같네요

추상화는 잡소리에서 얘기했듯, 추정하는 것의 세부적인 개념입니다.

문제를 선택했다면, 우리는 문제를 해결하기 위한 필수적인 정보들이 필요하게 됩니다.

예를 들어, 라면을 전보다 더 '잘' 끓이는 방법을 view에 표시하는 것을 문제라고 해볼까요?

그럼 물의 온도, 스프와 물의 비율, 조리시간 등을 요구하게 될겁니다. 이는 다시 말하면 숫자의 형태를 가진 데이터겠네요.

temp, ratio, time 이렇게 놓고 보면 딱 봐도 아, 이건 숫자들로 이루어진 변수겠구나! 할 수 있겠죠?

이게 바로 추상화입니다. 변수의 이름만 보고도 value의 data type을 유추할 수 있다는 것은 아주 훌륭한 추상화가 반영된 것으로 이해하실 수 있겠습니다.

그렇다면 이러한 값들은 보는 사람이 최고의 라면을 만들어내기까지 지속적으로 다른 값으로 변할겁니다. 어쩌면 숫자가 아닌 글자의 값을 넣어주어야 할지도 모르고요.

기존에 minute 단위를 쓰던 time을 ms, s 단위로 바꾸거나, 아니면 '3분 43초' 라는 string 값을 넣어주면 user의 입장에서는 더 알아보기 쉽겠죠.

이제 추상화된 데이터들을 변화시키는 과정을 통해 OOP가 갖는 첫번째 특성이 나타나게 됩니다.

만약 우리가 조리시간(time - number)을 사용자에게 편한 (time - string)문자열로 변경해서 출력하고자 한다면 이러한 역할을 수행해줄 함수나 메서드를 활용해야겠죠.

그러나 Polymorphism을 가지지 않는다면, 아마도 number를 string으로 변환하는 기능만을 가지는 함수를 사용해야 할겁니다.

하지만 Polymorphism을 지원하는 언어라면 어떨까요? 변경하고자 하는 data의 type에 의존하지 않는 함수를 사용할겁니다.

예를 들자면

```java
//숫자를 문자열로 바꾸는 경우
string = StringFromNumber(number);

//날짜를 문자열로 바꾸는 경우
string = StringFromDate(date);
```

이러한 방식은 Monomorphism을 가지는 언어에서의 선언이 될 것입니다. 보시다시피, 하나의 data type에 하나의 함수를 직접 할당하고 있는 개념이죠.

```java
//숫자를 문자열로 바꾸는 경우
string = number.StringValue();

//날짜를 문자열로 바꾸는 경우
string = date.StringValue();
```

이러한 방식은 Polymorphism을 지원하는 언어에서의 선언입니다. 보시면 차이가 선명하게 드러나죠?

즉, 다향성을 갖는 언어에서의 추상은 보다 더 직관적이고, 유지보수에 있어 유용하다는 것을 알 수 있습니다. data type에 구애받지 않기에 어떠한 data가 오든 하나의 메서드를 활용해 string으로 치환할 수 있는 것이죠.

data Abstraction에 있어 Polymorphism의 지원은 상당히 유용하겠죠? 그렇다고 해서 단형성(Monomorphism)을 갖는 언어가 '구식'이라는 것이 아닙니다. 분명 장단점이 존재하죠. 엄격한 함수의 사용과 정교한 디버깅을 원한다면 Monomorphism은 작성이 번거로울 뿐 상당히 매력적일 수 있습니다. -> 뇌피셜😥😥

그러나 우리가 사용하는 Java라는 언어는 분명히 다형성을 지원하고, 우린 이를 통해 손쉬운 data 처리가 가능함을 인정할 수 밖에 없겠습니다.
