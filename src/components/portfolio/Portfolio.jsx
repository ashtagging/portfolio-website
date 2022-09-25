import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./portfolio.scss";
import "../viewButton/viewButton.scss";
import {
  productive,
  weatherApp,
  wardle,
  feedbackRating,
  readBay,
} from "../../projectsData";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "productive",
      title: "Productive",
    },
    {
      id: "weatherApp",
      title: "Weather App",
    },
    {
      id: "wardle",
      title: "Wardle",
    },
    {
      id: "feedbackRating",
      title: "Feedback Rating",
    },
    {
      id: "readBay",
      title: "ReadBay",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "productive":
        setData(productive);
        break;
      case "weatherApp":
        setData(weatherApp);
        break;
      case "wardle":
        setData(wardle);
        break;
      case "feedbackRating":
        setData(feedbackRating);
        break;
      case "readBay":
        setData(readBay);
        break;
      default:
        setData(productive);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="item">
        {data.map((d) => (
          <PortfolioCard
          id={d.id}
            title={d.title}
            status={d.status}
            img={d.img}
            githubLink={d.githubLink}
            websiteLink={d.websiteLink}
            notionLink={d.notionLink}
            about={d.about}
            challenges={d.challenges}
            languages1={d.languages1}
            languages2={d.languages2}
            languages3={d.languages3}
            packages1={d.packages1}
            packages2={d.packages2}
            packages3={d.packages3}          
          />
        ))}
      </div>
      <a className="arrow-down" href="#photos">
        <img src="assets/down.png" alt="arrow" />
      </a>
    </div>
  );
}
