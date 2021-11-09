/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import Paper from "@material-ui/core/Paper";
import TipsList from "./TipsList";
import { makeStyles } from "@material-ui/core/styles";
import "../../style/TipsSlider.css"

const useStyles = makeStyles({
  bgPaper: {
    backgroundColor: "rgba(200,200,200,0.5)",
    marginLeft: "auto",
    marginRight: "auto",
    margin: "2vh",
    width: "80%",
  },
});

export default function TipsSlider() {
  var settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slides",
    arrows: false,
  };
  const classes = useStyles();
  return (
    <div>
      <h2>Here you have some tips</h2>
      <Paper className={classes.bgPaper} elevation={0}>
        <div>
          <Slider {...settings}>
            {TipsList.map((item, i) => {
              return (
                <div key={item + "-" + i + "-index-slider"} className="TipList">
                  <h1>{item.title}</h1>
                  <p>{item.message} </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </Paper>
    </div>
  );
}
