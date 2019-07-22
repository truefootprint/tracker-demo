import { useState } from "react";
import css from "./styles.scss";

import "../layout/reset.scss";

const videos = [
  { file: "all-examples", title: "All examples (combined)" },
  { file: "example-a",    title: "Example A" },
  { file: "example-b",    title: "Example B" },
  { file: "example-e2",   title: "Example E2" },
  { file: "example-f5",   title: "Example F5" },
  { file: "example-f4",   title: "Example F4" },
  { file: "example-g2",   title: "Example G2" },
  { file: "example-h2",   title: "Example H2" },
  { file: "example-i2",   title: "Example I2" },
];

const Videos = ({ setPage }) => {
  const [index, setIndex] = useState(0);
  const current = videos[index];

  const setVideo = (index) => {
    setIndex(index);
    window.scrollTo(0, 0);
  };

  return (
    <div className={css.videos}>
      <a className={css.aside} href="https://docs.google.com/document/d/1Ls5-K3MOPPhE5RYxiCJFlXi-dVfY9XFd8nLUMSjv1dQ" target="_blank">
        Script demo
      </a>

      <h2>{current.title}</h2>

      <video key={index} controls poster={`/static/thumbnails/${current.file}.jpg`}>
        <source src={`/static/videos/${current.file}.mp4`} type="video/mp4" />
      </video>

      <p className={css.disclaimer}>
        Please note, these videos are for illustrative purposes only. The graphs
        shown do not contain representative data.
      </p>

      <h2>Videos</h2>

      <div className={css.gallery}>
        {videos.map((video, index) => (
          <div key={index} className={css.thumbnail} onClick={() => setVideo(index)}>
            <img src={`/static/thumbnails/${video.file}.jpg`} />
            <p>{video.title}</p>
            <div className={css.highlight} />
          </div>
        ))}
      </div>

      <p className={css.copyright}>
        © {new Date().getFullYear()} TrueFootprint
      </p>
    </div>
  );
};

export default Videos;
