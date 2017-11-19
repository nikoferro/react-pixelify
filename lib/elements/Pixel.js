import React, { Component } from "react";
import styled from "styled-components";

class Pixel extends Component {
  findFactors(number) {
    return Array.from(Array(number), (_, i) => i).filter(i => number % i === 0);
  }
  componentDidMount() {
    const pixel = this.props.pixelSize;
    const canvas = this.canvas;
    const ctx = canvas.getContext("2d");
    let img = this.image;
    const width = img.width;
    const height = img.height;
    canvas.width = width;
    canvas.height = height;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      for (let x = 0; x < width; x += pixel) {
        for (let y = 0; y < height; y += pixel) {
          const rgba = ctx.getImageData(x, y, 1, 1).data;
          ctx.fillStyle = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;
          ctx.fillRect(x, y, pixel, pixel);
        }
      }
    };
  }
  render() {
    return (
      <div>
        <canvas
          ref={canvas => {
            this.canvas = canvas;
          }}
        />
        <img
          src={this.props.src}
          ref={image => {
            this.image = image;
          }}
          hidden={true}
        />
      </div>
    );
  }
}

export default Pixel;
