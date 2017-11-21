# React Pixelify

This repository contains the source code and documentation of the pixelify component for React.

Currently, the package includes only the following component:

* Pixelify
## Demo

https://nikoferro.github.io/react-pixelify-demo/

## Installing

Using npm:

```bash
$ npm install react-pixelify
```

## Basic Usage

Importing the package

```jsx
  import { Pixelify } from "react-pixelify";
```
Usage 

```jsx
  // Require your image
  const src = require("./image.jpg");
  
  // Basic setup
  <Pixelify
    src={src}
    pixelSize={20}
  />
```

## Properties

| Property              | Type   | Default Value         | Description                                                                                                                                                                                                   | Required |
|-----------------------|--------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| src                   | String |                       | Source of the image                                                                                                                                                                                           | Yes      |
| pixelSize             | Int    | 1                     | Size of the pixel in the new pixelated image. if no value is set, the original image is displayed with no pixelated effect                                                                                    | No       |
| width                 | Int    | image original width  | You can use this prop to override the original width                                                                                                                                                          | No       |
| height                | Int    | image original height | You can use this prop to override the original height                                                                                                                                                         | No       |
| centered              | Bool   | false                 | If true, the pixels grid will be centered vertically and horizontally. Example: You choose a pixelSize of 10, but your image width or height cant be divided by an exact grid of 10x10 pixels. Setting this prop as **true** will set an offset that keeps the grid centered | No       |
| fillTransparencyColor | String | white                 | For images with transparency, you can set a value for the places where the image is transparent. Think of it as a background color for your pixelated image                                                   | No       |
