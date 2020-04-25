import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from '../assets/styles';

import ProfileItem from '../components/ProfileItem';
// import Icon from '../../components/Icon';
import Demo from '../assets/data/demo';

const ProfileScreen = (props) => {
  const {
    route: {
      params: { profileId },
    },
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
    console.log('visibleImage', visibleImage);
    setVisibleImage(visibleImage - 1 < 0 ? images.length : visibleImage - 1);
  };
  const handleImageRight = () => {
    console.log('visibleImage', visibleImage);

    setVisibleImage(visibleImage + 1 === images.length ? 0 : visibleImage + 1);
  };

  return (
    // eslint-disable-next-line global-require
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
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

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              {/* <Icon name="optionsH" /> */}
              <SimpleLineIcons name="arrow-right" size={32} color="#FFA200" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              {/* <Icon name="chat" />
               */}
              <SimpleLineIcons name="arrow-right" size={32} color="#FFA200" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
