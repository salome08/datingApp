import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import styles, { PRIMARY_COLOR } from '../assets/styles';
import AshtagsFrench from '../assets/data/ashtagsFrench';

const AshtagsEditSection = () => {
  const [showAshtags, setShowAshtags] = React.useState(false);

  // set selected to myProfile
  const [selected, setSelected] = React.useState([]);

  const handlePressArrow = () => {
    setShowAshtags(!showAshtags);
    console.log('Show others ashtags', showAshtags);
  };

  const handleAddAshtag = (ashtag) => {
    console.log(ashtag);
    console.log(selected.length);
    if (selected.length < 12) setSelected([...selected, ashtag.title]);
    console.log('selected', selected);
  };
  const handleDeleteAshtag = (toDelete) => {
    if (showAshtags) setSelected(selected.filter((ashtag) => ashtag !== toDelete));
    console.log('selected', selected);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.simpleCardAshtagsItem}>
          {selected.map((ashtag) => (
            <TouchableOpacity
              style={{ paddingHorizontal: 3, paddingVertical: 1 }}
              onPress={() => handleDeleteAshtag(ashtag)}
              key={ashtag}
            >
              <Badge
                key={ashtag}
                badgeStyle={{
                  height: 23,
                  backgroundColor: '#fff',
                  borderColor: '#eee',
                  borderWidth: 1,
                  borderRadius: 3,
                  paddingHorizontal: 4,
                }}
                value={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Text style={{ color: PRIMARY_COLOR, fontSize: 12, margin: 2 }}>
                    #<Text style={{ fontWeight: 'bold' }}>{ashtag}</Text>
                  </Text>
                }
              />
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon color="gray" name="chevron-right" onPress={handlePressArrow} />
        </View>
      </View>

      {showAshtags && (
        // <SafeAreaView>
        <ScrollView contentContainerStyle={styles.simpleCardAshtagsItem}>
          {AshtagsFrench.filter((ashtag) => !selected.includes(ashtag.title)).map(
            (ashtag) => (
              <TouchableOpacity
                style={{ paddingHorizontal: 3, paddingVertical: 1 }}
                onPress={() => handleAddAshtag(ashtag)}
                key={ashtag.title}
              >
                <Badge
                  key={ashtag.title}
                  badgeStyle={{
                    height: 23,
                    // borderColor: '#fff',
                    // borderWidth: 1,
                    backgroundColor: '#eee',
                    borderRadius: 3,
                    paddingHorizontal: 4,
                  }}
                  value={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <Text style={{ color: 'gray', fontSize: 12, margin: 2 }}>
                      #<Text style={{ fontWeight: 'bold' }}>{ashtag.title}</Text>
                    </Text>
                  }
                />
              </TouchableOpacity>
            )
          )}
        </ScrollView>
        // </SafeAreaView>
      )}
    </View>
  );
};

export default AshtagsEditSection;
