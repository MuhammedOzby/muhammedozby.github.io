import React, { Component } from "react";
import { Link } from "react-router-dom";
import { calismalar } from "../../data";
export default class ExamplePage extends Component {
  render() {
    return (
      <>
        <h1 className="title is-4">YAZILAR</h1>
        <ul>
          {calismalar.map((data) => (
            <Link
              to={`/calisma/${data.icerikYolu}`}
              style={{ color: "var(--main-text-color)" }}
            >
              <li className="mb-4">
                <h1 className="title is-5">{data.baslik}</h1>
                {data.aciklama}
              </li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
}
