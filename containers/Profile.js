import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles';

import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo';

const Profile = ({ setShowProfile }) => {
  const { age, image, info1, info2, info3, info4, location, match, name } = Demo[7];

  return (
    // eslint-disable-next-line global-require
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.topProfile}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <Icon name="chevronLeft" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setShowProfile(false);
          }}
        >
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
        </TouchableHighlight>

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
