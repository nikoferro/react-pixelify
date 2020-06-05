import React, { Component } from "react";
import PropTypes from "prop-types";

class Pixelify extends Component {
  canvas = null;
  componentDidMount() {
    this.pixelify(this.props);
  }
  componentDidUpdate() {
    this.pixelify(this.props);
  }
  pixelify({ src, width, height, pixelSize, centered, fillTransparencyColor }) {
    pixelSize = parseInt(pixelSize, 10);
    // create img that will be later painted into the canvas
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    // once image is loaded..
    img.onload = () => {
      const canvas = this.canvas;
      const ctx = canvas.getContext("2d");
      img.width = width ? width : img.width;
      img.height = height ? height : img.height;
      canvas.width = img.width;
      canvas.height = img.height;
      // we paint the image into the canvas
      // this is needed to get RGBA info out of each pixel
      ctx.drawImage(img, 0, 0, img.width, img.height);
      this.paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor);
      img = null;
    };
  }
  paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor) {
    if (!isNaN(pixelSize) && pixelSize > 0) {
      for (let x = 0; x < img.width + pixelSize; x += pixelSize) {
        for (let y = 0; y < img.height + pixelSize; y += pixelSize) {
          let xColorPick = x;
          let yColorPick = y;

          if (x >= img.width) {
            xColorPick = x - (pixelSize - (img.width % pixelSize) / 2) + 1;
          }
          if (y >= img.height) {
            yColorPick = y - (pixelSize - (img.height % pixelSize) / 2) + 1;
          }

          const rgba = ctx.getImageData(xColorPick, yColorPick, 1, 1).data;
          // TODO: add support for png transparent background
          // need to create another canvas and duplicate process?
          // one canvas to get the data from
          // one to paint pixels into
          ctx.fillStyle =
            rgba[3] === 0
              ? fillTransparencyColor
              : `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;

          if (centered) {
            ctx.fillRect(
              parseInt(x - (pixelSize - (img.width % pixelSize) / 2), 10),
              parseInt(y - (pixelSize - (img.height % pixelSize) / 2), 10),
              pixelSize,
              pixelSize
            );
          } else {
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }
    }
  }
  render() {
    return (
      <canvas
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}

Pixelify.propTypes = {
  src: PropTypes.string.isRequired,
  pixelSize: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  centered: PropTypes.bool,
  fillTransparencyColor: PropTypes.string
};

Pixelify.defaultProps = {
  centered: false,
  fillTransparencyColor: "white"
};

export default Pixelify;
