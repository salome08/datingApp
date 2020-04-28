import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styled from 'styled-components';

const sliderThumbStyles = (props) => `
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.View`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2px;
  margin-bottom: 2px;
  .value {
    flex: 1;
    font-size: 18;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => console.log('color', props.color)}
    }
    &::-moz-range-thumb {
      ${(props) => console.log('opacity', props.opacity)}
    }
  }
`;

const Slider = () => {
  const [slide, setSlide] = React.useState(50);

  const handleChange = (event) => {
    let { value } = event.target;
    const min = 0;
    const max = 40;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setSlide(value);
  };

  return (
    <Styles opacity={1} color="red">
      {/* <TextInput
        type="range"
        value={slide.toString()}
        className="slider"
        onChange={handleChange}
      /> */}
      <View className="value">
        <Text>{slide}</Text>
      </View>
    </Styles>
  );
};

export default Slider;
