/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { useNavigation } from '@react-navigation/native';
import CardItem from '../components/CardItem';

import styles from '../assets/styles';
import Demo from '../assets/data/demo';

const SwipeScreenTest = () => {
  const navigation = useNavigation();
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
      <View style={{ height: '10%' }} />
      <View style={{ height: '80%' }}>
        <CardStack
          loop
          verticalSwipe
          disableTopSwipe
          disableBottomSwipe
          renderNoMoreCards={() => null}
          style={styles.cardStack}
          cardContainerStyle={{ height: '100%' }}
          // eslint-disable-next-line react/no-this-in-sfc
          // eslint-disable-next-line no-return-assign
          ref={(swiper) => (this.swiper = swiper)}
        >
          {Demo.map((item) => (
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transparent"
              onPress={
                () => {
                  navigation.navigate('ProfileScreen', {
                    profileId: item.id,
                    swipeLeft: () => this.swiper.swipeLeft(),
                    swipeRight: () => this.swiper.swipeRight(),
                  });
                }
                // eslint-disable-next-line react/jsx-curly-newline
              }
              key={item.id}
            >
              <Card key={item.id} style={styles.cardr}>
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
