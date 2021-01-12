import React from "react";
import axios from "axios";
import Movie from "./Movie.js"; // import function component
import "./reset.css";
import "./App.css";

class App extends React.Component {
  // state를 요구하면 class component로 작성합니다.
  state = {
    isLoading: true,
    movies: [], // movies 라는 prop을 empty-array로 정의한 후, value를 추가하는 형태입니다.
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    /* 이러한 선언은 ES6의 문법으로, 처음 봤을 때에는 마치 `익명객체`와도 같이 보입니다.
     그러나 정의하는 변수는 애초에 객체 내에 포함되어 있습니다. (prettier는 이것을 명시해주죠.)
     movies 라는 객체 선언 이전에 우린 외부 YTS API를 fetch하고, 이는 비동기로 처리됩니다.
     async await의 개념은 이미 전에 JS blur up 처리에서 
     불러온 api object.data.data.movies를 우린 다시 movies로 선언 즉, 정의하게 됩니다.*/

    this.setState({ movies, isLoading: false });
    /* 여기서 movies는 movies: movies 라는 의미를 내포합니다. 이는 ES6의 문법 중 일부입니다.
     이와 같은 선언은 동명의 변수와 해당 객체 내의 property를 바인딩하는 행위입니다.
     위에서 불러온 API 내의 movies라는 obj를 다시 state 내의 movies prop의 value로 정의하는 것이죠.
     setState()의 경우 state = {} 내에 존재하는 prop만을 reset할 수 있기 때문에, 
     이와 같은 메소드의 활용에서 두드러지는 ES6의 문법입니다. */
  };

  componentDidMount() {
    this.getMovies();
    /* componentDidMount() 메소드는 render()의 최초실행 이후 가장 먼저 실행되는 메소드입니다.
     그렇기 때문에 initializing 이후 동기 함수 처리가 가능하다고 생각하시면 됩니다.
     render() -> componentDidMount() */
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <div className="header">
          <span className="header__title">My First React Movie App</span>
        </div>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              /* map() 메소드를 활용해 우리는 Movie component props value를 순환식으로 작성합니다.
              movies Array의 각 obj들을 하나씩 가져오는 것이죠. 사전에 API에서 sort_by=rating을
              활용해 영화의 평점 순위에 따른 정렬을 완료했기 때문에 우린 map() 메소드만으로도 편하게
              component props value를 삽입할 수 있습니다. */
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              /*Movie의 props는 Movie.js에서 생성했습니다. Movie의 value의 경우, movies 라는
            Array의 object를 기반으로 구성되었습니다.*/
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App; // App을 index.js로 내보내기 위한 export 문입니다.
