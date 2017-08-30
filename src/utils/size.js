import { Dimensions } from 'react-native';
let width = Dimensions.get('window').width;

export let getWidth = (ImgPsdWidth) => {
  let zoom = ImgPsdWidth / 750; //实际宽度除以设备宽度
  return width * zoom;
};

export let getHeight = (ImgPsdWidth, ImgPsdHeight) => {
  let ImgWidth = getWidth(ImgPsdWidth);
  let ImaHeight = ImgPsdHeight / ImgPsdWidth * ImgWidth;
  return ImaHeight;
};