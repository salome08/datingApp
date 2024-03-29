import React from 'react';
import { View } from 'react-native';
import { Slider } from 'react-native-elements';

const RangeSlider = (props) => {
  const { valueMin, setValueMin, valueMax, setValueMax } = props;

  return (
    <View>
      <Slider
        value={valueMin}
        onValueChange={(value) => {
          setValueMin(value);
        }}
      />
      <Slider
        value={valueMax}
        onValueChange={(value) => {
          setValueMax(value);
        }}
      />
    </View>
  );
};

export default RangeSlider;
