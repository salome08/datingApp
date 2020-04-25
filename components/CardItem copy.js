import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
// import Icon from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles';

// import Icon from './Icon';

const CardItem = ({
  actions,
  description,
  ashtags,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant,
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  // const imageStyle = [
  //   {
  //     borderRadius: 8,
  //     width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
  //     height: variant ? 170 : 350,
  //     margin: variant ? 0 : 20,
  //   },
  // ];
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: '50%',
      margin: variant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* HASHTAGS */}
      <View style={{ height: '20%' }}>
        {ashtags.map((ashtag) => (
          <Badge value={<Text style={{ color: 'white', marginHorizontal: 2 }}>{ashtag}</Text>} />
        ))}
      </View>

      {/* DESCRIPTION */}
      {/* {description && <Text style={styles.descriptionCardItem}>{description}</Text>} */}

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            {/* <Text style={styles.star}> */}
            {/* <Icon type="ionicon" name="eye" size={35} /> */}
            <Ionicons name="md-star" size={32} color="#FFA200" />
            {/* </Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            {/* <Text style={styles.dislike}>
              <Icon type="evilicon" name="dislike" />
            </Text> */}
            <Ionicons name="md-heart-dislike" size={32} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
            {/* <Text style={styles.like}>
              <Icon type="evilicon" name="like" />
            </Text> */}
            <Ionicons name="md-heart" size={32} color="#e91e63" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            {/* <Text style={styles.flash}>
              <Icon type="evilicon" name="flash" />
            </Text> */}
            <Ionicons name="md-flash" size={32} color="purple" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
