import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, year, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  //key: PropTypes.number.isRequired, key는 id와 같기 때문에 생략합니다.(만약 다르다면, 추가해야 합니다.)
  // 따라서, 위 Movie function define 내에서도 props로 key가 존재하지 않습니다.
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
