import React from 'react';
import { View } from 'react-native';

const SimpleCard = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        // margin: '4%',
        borderRadius: 8,
        // padding: '4%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,

        elevation: 0,
      }}
    >
      {children}
    </View>
  );
};

export default SimpleCard;
