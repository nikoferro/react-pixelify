import React, { useEffect, useRef } from 'react';
import paintPixels from '../helpers/paintPixels';

const PixelifyHook = ({ src, width, height, pixelSize, centered, fillTransparencyColor }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const parsedPixelSize = parseInt(pixelSize, 10);
		console.log(parsedPixelSize);
		let img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = src;
		img.onload = () => {
			const canvasContext = canvasRef.current.getContext('2d');

			canvasRef.current.width = img.width;
			canvasRef.current.height = img.height;
			img.width = width ? width : img.width;
			img.height = height ? height : img.height;

			canvasContext.drawImage(img, 0, 0, img.width, img.height);
			paintPixels(canvasContext, img, parsedPixelSize, centered, fillTransparencyColor);

			img = null;
		};
	}, [src, width, height, pixelSize, centered, fillTransparencyColor, canvasRef]);

	return <canvas ref={canvasRef} />;
};

export default PixelifyHook;
