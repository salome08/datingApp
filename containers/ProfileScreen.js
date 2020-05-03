import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import styles, { PRIMARY_COLOR } from '../assets/styles';

import ProfileItem from '../components/ProfileItem';
// import Icon from '../../components/Icon';
import Demo from '../assets/data/demo';

const ProfileScreen = (props) => {
  const {
    route: {
      params: { profileId, swipeLeft, swipeRight },
    },
    navigation,
  } = props;
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
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
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

      <View style={styles.actionsCardItemProfile}>
        <TouchableOpacity style={styles.miniButton}>
          {/* <Text style={styles.star}> */}
          {/* <Icon type="ionicon" name="eye" size={35} /> */}
          <Ionicons name="md-star" size={32} color="#FFA200" />
          {/* </Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
            swipeLeft();
          }}
        >
          {/* <Text style={styles.dislike}>
              <Icon type="evilicon" name="dislike" />
            </Text> */}
          <Ionicons name="md-heart-dislike" size={32} color="#460115" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
            swipeRight();
          }}
        >
          {/* <Text style={styles.like}>
              <Icon type="evilicon" name="like" />
            </Text> */}
          <Ionicons name="md-heart" size={32} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniButton}>
          {/* <Text style={styles.flash}>
              <Icon type="evilicon" name="flash" />
            </Text> */}
          <Ionicons name="md-flash" size={32} color="purple" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
