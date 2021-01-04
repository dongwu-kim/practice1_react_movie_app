2. [Dynamic Components (function-components basic)](2_Dynamic_Components.md)

- [Back to Main](../../README.md)

현재 장의 노트

- [2.1 Array, map()](2_Dynamic_Components.md)

- **2.2 Father 내 img 태그 작성**

- [2.3 Id-Key](2_id-key.md)

- [2.4 prop-types](2_prop-types.md)

  - 2.2 Father 내 img 태그 작성법

    > alt 지정을 꼭 해주도록 합시다.

    alt의 존재이유는 image를 랜더링할 수 없을 때의 설명으로 생각하면 됩니다.

    React가 alt를 강조하는 이유에는 청각만을 이용해 사이트를 읽는 사람이 존재하기 때문이니 너무 고깝게 생각하지는 말아주세요! 사랑하며 살기에도 팍팍한 사회니까요.

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
