import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";
import Comment from "./Comment";

function Movie({ id, title, year, summary, poster, genres, trailer }) {
  return (
    <div className="movie__container">
      <div className="movie">
        <Link
          className="movie__btn"
          to={{
            pathname: `/movie/${id}`,
            state: {
              id,
              year,
              title,
              summary,
              poster,
              genres,
              trailer,
            },
          }}
        >
          <img src={poster} alt={title} title={title} />
          <div className="movie__date">
            <h4 className="movie__title">{title}</h4>
            <h5 className="movie__year">{year}</h5>
            <h5 className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </h5>
            <p className="movie__summary">{summary.slice(0, 100)}..</p>
          </div>
        </Link>
      </div>
      <div className="comment">
        <Comment />
      </div>
    </div>
  );
} //function component + slice() = 글자수 제한(0자부터~180자까지)

Movie.propTypes = {
  //key: PropTypes.number.isRequired, key는 id와 같기 때문에 생략합니다.(만약 다르다면, 추가해야 합니다.)
  // 따라서, 위 Movie function define 내에서도 props로 key가 존재하지 않습니다.
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  trailer: PropTypes.string.isRequired,
};

export default Movie;
