import React from 'react';
import { View } from 'react-native';

const SimpleCard = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        // margin: '4%',
        borderRadius: 5,
        // padding: '4%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}
    >
      {children}
    </View>
  );
};

export default SimpleCard;
