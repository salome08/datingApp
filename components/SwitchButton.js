import React, { useState } from 'react';
import { Switch } from 'react-native';
import { PRIMARY_COLOR } from '../assets/styles';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: '#fff', true: PRIMARY_COLOR }}
      thumbColor={isEnabled ? '#fff' : '#fff'}
      ios_backgroundColor="#ffffff"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
export default SwitchButton;
