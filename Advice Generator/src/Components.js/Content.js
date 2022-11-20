import React, { useEffect, useState } from "react";
import "../Style.css/Content.css";
import axios from "axios";

function Content() {
  const [post, setPost] = useState([]);
  const [change, setChange] = useState(1);
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [change]);

  const valueChange = () => {
    setChange((prev) => {
      if (prev == 1) {
        return prev - 1;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div id="box" key={post.slip && post.slip.id}>
      <div id="advice-number">
        <p>Advice #{post.slip && post.slip.id}</p>
      </div>
      <div id="advice-quote">
        <p>"{post.slip && post.slip.advice}"</p>
      </div>

      <div id="dice-box" onClick={valueChange}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          id="dice"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
}

export default Content;
