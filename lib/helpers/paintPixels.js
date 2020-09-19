const paintPixels = (canvasContext, img, pixelSize, centered, fillTransparencyColor) => {
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

				const rgba = canvasContext.getImageData(xColorPick, yColorPick, 1, 1).data;
				// TODO: add support for png transparent background
				// need to create another canvas and duplicate process?
				// one canvas to get the data from
				// one to paint pixels into
				canvasContext.fillStyle =
					rgba[3] === 0
						? fillTransparencyColor
						: `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;

				if (centered) {
					canvasContext.fillRect(
						parseInt(x - (pixelSize - (img.width % pixelSize) / 2), 10),
						parseInt(y - (pixelSize - (img.height % pixelSize) / 2), 10),
						pixelSize,
						pixelSize
					);
				} else {
					canvasContext.fillRect(x, y, pixelSize, pixelSize);
				}
			}
		}
	}
};

export default paintPixels;
