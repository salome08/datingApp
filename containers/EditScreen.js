import React from 'react';
import { View, ScrollView, TextInput, SafeAreaView, Text, Slider } from 'react-native';
import SimpleCard from '../components/SimpleCard';
import styles from '../assets/styles';
import SwitchButton from '../components/SwitchButton';
import ImagesDnd from '../components/ImagesDnd';
import AshtagsEditSection from '../components/AshtagsEditSection';
import Demo from '../assets/data/demo';

const EditScreen = () => {
  const [valueMin, setValueMin] = React.useState(18);
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const [bio, setBio] = React.useState('');
  const myProfile = Demo[0];

  // const [valueMax, setValueMax] = React.useState(22);
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        scrollEnabled={scrollEnabled}
        contentContainerStyle={{ marginHorizontal: '2%' }}
      >
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Pictures</Text>
            </View>
            <View style={styles.simpleCardItem}>
              <ImagesDnd setScrollEnabled={setScrollEnabled} user={myProfile} />
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Bio</Text>
            </View>
            <View style={styles.simpleCardInputItem}>
              <TextInput
                // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setBio(text)}
                value={bio}
                multiline
                placeholder="Qui es-tu ?"
                underlineColorAndroid="transparent"
              />
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>HashTags</Text>
            </View>
            <AshtagsEditSection myProfile={myProfile} />

            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
        <View style={{ flex: 6, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Practice</Text>
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Kosher</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Shabbat</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Non-practicing</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Practicing</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Religious</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Very Religious</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Other</Text>
              <SwitchButton />
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Height</Text>
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Visible</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardSliderItem}>
              <Slider
                step={1}
                maximumValue={100}
                value={valueMin}
                onValueChange={setValueMin}
              />
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditScreen;
