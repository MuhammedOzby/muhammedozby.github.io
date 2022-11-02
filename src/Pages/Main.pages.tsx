import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import PageNavigation from "../Component/PageNavigation.component";
export default class MainPages extends Component {
  public SOCIAL_NETWORKS: Array<{
    title: string;
    address: string;
    icon: JSX.Element;
  }>;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.SOCIAL_NETWORKS = [
      {
        title: "GitHub",
        address: "https://github.com/MuhammedOzby/",
        icon: <BsGithub />,
      },
      {
        title: "Linkedin",
        address: "https://www.linkedin.com/in/muhammed-mustafa-ozbay/",
        icon: <BsLinkedin />,
      },
      {
        title: "YouTube",
        address: "https://www.youtube.com/channel/UCkbcLhVSDADy9BhgxFjOI3Q",
        icon: <BsYoutube />,
      },
      {
        title: "Twitter",
        address: "https://twitter.com/KaranlikDiyar",
        icon: <BsTwitter />,
      },
    ];
  }
  render() {
    return (
      <div>
        {/* Masaüstü */}
        <div className="columns is-hidden-tablet custom-content">
          <div className="column is-full m-0">
            <h1 className="title is-4">Muhammed Mustafa ÖZBAY</h1>
            <h2 className="subtitle is-6">
              YAZILIM GELİŞTİRİCİ / SOFTWARE DEVELOPER
            </h2>
          </div>
          <hr className="m-1" />
          <div className="column is-full m-0">
            <Outlet />
          </div>
        </div>
        {/* Mobil */}
        <div className="columns is-hidden-mobile custom-content">
          <div className="column is-four-fifths">
            <h1 className="title is-1">Muhammed Mustafa ÖZBAY</h1>
            <h2 className="subtitle is-4">
              YAZILIM GELİŞTİRİCİ / SOFTWARE DEVELOPER
              {this.SOCIAL_NETWORKS.map((data) => (
                <a
                  href={data.address}
                  key={data.title}
                  className="social-icons"
                >
                  {data.icon}
                </a>
              ))}
            </h2>
            <hr />
            <Outlet />
          </div>
        </div>
        <Link to={""} replace>
          <button className="button main-page-button">
            <MdArrowBackIosNew /> Main Page / Ana Sayfa
          </button>
        </Link>
        {/* MENU */}
        <PageNavigation />
      </div>
    );
  }
}
