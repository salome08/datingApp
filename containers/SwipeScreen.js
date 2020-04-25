/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { View, ImageBackground, Text, TouchableHighlight } from 'react-native';
import { Modal } from 'react-native-modal';
import { withRouter } from 'react-router';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';

import styles, { PRIMARY_COLOR } from '../assets/styles';
import Demo from '../assets/data/demo';
import { NavigationContainer } from '@react-navigation/native';

const SwipeScreenTest = ({ navigation }) => {
  React.useEffect(() => {}, []);
  return (
    // eslint-disable-next-line global-require
    <View style={styles.containerHome}>
      {/* <View style={styles.topContainer}>
        <View style={styles.top}>
          <View style={{ width: '20%' }} />
          <View style={{ width: '60%', alignItems: 'center' }}>
            <Text
              xs={2}
              style={{
                color: PRIMARY_COLOR,
                fontSize: 32,
                fontWeight: 'bold',
              }}
            >
              Zalma
            </Text>
          </View>
          <View style={{ width: '20%', alignItems: 'center' }}>
            <Filters />
          </View>
        </View>
      </View> */}

      <View style={{ height: '100%' }}>
        <CardStack
          loop
          verticalSwipe
          disableTopSwipe
          disableBottomSwipe
          renderNoMoreCards={() => null}
          style={styles.cardStack}
          cardContainerStyle={{ height: '80%' }}
          // eslint-disable-next-line react/no-this-in-sfc
          // eslint-disable-next-line no-return-assign
          ref={(swiper) => (this.swiper = swiper)}
        >
          {Demo.map((item) => (
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transparent"
              onPress={() => navigation.navigate('ProfileScreen', { profileId: item.id })}
              key={item.id}
            >
              <Card key={item.id} style={styles.cardr}>
                {/* <View style={{ backgroundColor: '#47e', height: '70%' }}>
                  <Text>hello</Text>
                </View> */}

                {/* <Text>Hellooooo</Text> */}
                <CardItem
                  image={item.images[0]}
                  name={item.name}
                  description={item.description}
                  ashtags={item.ashtags}
                  matches={item.match}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            </TouchableHighlight>
          ))}
        </CardStack>
      </View>
    </View>
  );
};

export default SwipeScreenTest;
