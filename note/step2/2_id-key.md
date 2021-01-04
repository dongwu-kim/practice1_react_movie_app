2. [Dynamic Components (function-components basic)](2_Dynamic_Components.md)

- [Back to Main](../../README.md)

현재 장의 노트

- [2.1 Array, map()](2_Dynamic_Components.md)

- [2.2 Father 내 img 태그 작성](2_img.md)

- **2.3 Id-Key**

- [2.4 prop-types](2_prop-types.md)

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
