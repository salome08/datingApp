/* eslint-disable global-require */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  View,
  VirtualizedList,
} from 'react-native';
import Message from '../components/Message';
import Demo from '../assets/data/demo';

import styles from '../assets/styles';

const getItemCount = () => {
  return Demo.length;
};

const getItem = (data, index) => {
  return Demo[index];
};

const Messages = () => {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Discussions</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>{/* <Icon name="optionsV" /> */}</Text>
          </TouchableOpacity>
        </View>
        <VirtualizedList
          data={Demo}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message image={item.image} name={item.name} lastMessage={item.message} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Messages;
