import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
// import Icon from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles, { PRIMARY_COLOR } from '../assets/styles';

// import Icon from './Icon';

const CardItem = ({
  actions,
  ashtags,
  image,
  name,
  onPressLeft,
  onPressRight,
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
      height: '100%',
      // margin: variant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      // paddingTop: variant ? 10 : 15,
      // paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: 25,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      <View
        style={{
          // height: '55%',
          flex: 3,
          // backgroundColor: '#44e',
          padding: 10,
        }}
      >
        {/* IMAGE */}
        <Image source={image} style={imageStyle} />
      </View>

      <View
        style={{
          // height: '15%',
          flex: 0.5,
          // backgroundColor: '#65f',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* NAME */}
        <Text style={nameStyle}>{name}, 21</Text>
      </View>

      {/* ASHTAGS */}
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          paddingHorizontal: '10%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            // height: '15%',
            // flex: 0.5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            // paddingHorizontal: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#65a',
          }}
        >
          {ashtags.map((ashtag) => (
            <Badge
              key={ashtag}
              badgeStyle={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#c7003957',
                margin: 3,
                // justifyContent: 'center'
                // paddingVertical: 4,
              }}
              value={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Text style={{ color: PRIMARY_COLOR, fontSize: 12, margin: 2 }}>
                  {ashtag}
                </Text>
              }
            />
          ))}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          // height: '15%'
          justifyContent: 'center',
          // backgroundColor: '#65e',
        }}
      >
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
              <Ionicons name="md-heart-dislike" size={32} color="#460115" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
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
        )}
      </View>
    </View>
  );
};

export default CardItem;
