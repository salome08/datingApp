/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { DraggableGrid } from 'react-native-draggable-grid';
import { Icon } from 'react-native-elements';
import CloseButton from './CloseButton';

const ImagesDnd = (props) => {
  const { setScrollEnabled } = props;
  const [newImage, setNewImage] = React.useState(null);
  const [data, setData] = React.useState([
    { name: '+', key: 'add', disabledDrag: true, disabledReSorted: true },
  ]);

  const onDeleteImage = (item) => {
    setData(data.filter((row) => row.name !== item.name));
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setNewImage(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const onPressItem = (item) => {
    if (item.key === 'add' && data.length < 6) {
      pickImage();
    }
  };

  React.useEffect(() => {
    if (newImage) {
      setData([
        { name: `${Math.random()}`, key: `${Math.random()}`, uri: newImage },
        ...data,
      ]);
    }
  }, [newImage]);

  const itemPicture = (item) => {
    return (
      <ImageBackground
        imageStyle={{ borderRadius: 8 }}
        style={styles.item}
        source={item}
        key={item.key}
      >
        <View
          style={{
            position: 'relative',
            left: '50%',
            top: '-50%',
          }}
        >
          <CloseButton onPress={() => onDeleteImage(item)} />
        </View>
      </ImageBackground>
    );
  };

  const itemAdd = (item) => {
    return (
      <View style={styles.item} key={item.key}>
        <Icon name="add" color="gray" size={42} />
      </View>
    );
  };

  const renderItem = (item) => {
    return item.key !== 'add' ? itemPicture(item) : itemAdd(item);
  };

  React.useEffect(() => {}, [data]);
  return (
    <View style={styles.wrapper}>
      <DraggableGrid
        numColumns={3}
        data={data}
        renderItem={renderItem}
        onItemPress={(item) => onPressItem(item)}
        onDragStart={() => setScrollEnabled(false)}
        onDragRelease={(newData) => {
          setScrollEnabled(true);
          setData(newData); // need reset the props data sort after drag release
        }}
      />
    </View>
  );
};

export default ImagesDnd;

const styles = StyleSheet.create({
  // button: {
  //   width: 150,
  //   height: 100,
  //   backgroundColor: 'blue',
  // },
  wrapper: {
    // paddingTop: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: '#32e5',
  },
  item: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  item_text: {
    fontSize: 40,
    color: '#FFFFFF',
  },
});
