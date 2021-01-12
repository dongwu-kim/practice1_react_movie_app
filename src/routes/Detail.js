import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      console.log(location.state);
      const trailer = location.state.trailer,
        title = location.state.title,
        summary = location.state.summary;
      if (trailer) {
        return (
          <section className="detail__container">
            <div className="detail__text">
              <iframe
                className="trailer__video"
                title="Trailer Youtube Videos"
                width="360"
                height="240"
                src={`https://www.youtube.com/embed/` + trailer}
              ></iframe>
              <a className="trailer__link" href={`https://youtu.be/` + trailer}>
                Trailer Link
              </a>
              <h3 className="detail__title">{title}</h3>
              <span className="detail__desc">{summary.slice(0, 300) + `...`}</span>
            </div>
          </section>
        );
      } else {
        return (
          <section className="detail__container">
            <div className="detail__text">
              <span className="trailer__link">Cannot found Trailer</span>
            </div>
          </section>
        );
      }
    } else {
      return null;
    }
  }
}

export default Detail;
