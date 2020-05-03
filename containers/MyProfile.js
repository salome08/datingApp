import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from '../assets/styles';

import ProfileItem from '../components/ProfileItem';
// import Icon from '../../components/Icon';
import Demo from '../assets/data/demo';

const ProfileScreen = () => {
  // const {
  //   route: {
  //     params: { profileId },
  //   },
  // } = props;
  const profileId = 1;
  const {
    age,
    images,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
    // ashtags,
  } = Demo[profileId - 1];

  const [visibleImage, setVisibleImage] = React.useState(0);

  const handleImageLeft = () => {
    setVisibleImage(visibleImage - 1 < 0 ? images.length : visibleImage - 1);
  };
  const handleImageRight = () => {
    setVisibleImage(visibleImage + 1 === images.length ? 0 : visibleImage + 1);
  };

  return (
    // eslint-disable-next-line global-require
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={images[visibleImage]} style={styles.photo}>
          <View style={styles.topProfile}>
            <TouchableOpacity onPress={() => handleImageLeft()}>
              <Text style={styles.topIconLeft}>
                <SimpleLineIcons name="arrow-left" size={32} color="#eee" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleImageRight()}>
              <Text style={styles.topIconRight}>
                <SimpleLineIcons name="arrow-right" size={32} color="#eee" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
