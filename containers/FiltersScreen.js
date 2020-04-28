import React from 'react';
import { View, ScrollView, SafeAreaView, Text, Slider } from 'react-native';
import SimpleCard from '../components/SimpleCard';
import styles, { PRIMARY_COLOR } from '../assets/styles';
import SwitchButton from '../components/SwitchButton';

const FiltersScreen = () => {
  const [valueMin, setValueMin] = React.useState(18);
  const [valueMax, setValueMax] = React.useState(22);
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ marginHorizontal: '2%' }}>
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Search Distance</Text>
            </View>
            <View style={styles.simpleCardSliderItem}>
              {/* <RangeSlider
                range={{
                  start: 3000,
                  end: 50000,
                }}
                rangeLabels={{
                  start: '3K',
                  end: '50K',
                }}
              /> */}
              <Slider
                step={1}
                maximumValue={100}
                value={valueMin}
                onValueChange={setValueMin}
              />
              <Text>Min: {valueMin}</Text>
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
        <View style={{ flex: 1, margin: '2%' }}>
          <SimpleCard>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersTitle}>Age</Text>
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
              <Text style={styles.filtersTitle}>Show Me</Text>
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Men</Text>
              <SwitchButton />
            </View>
            <View style={styles.simpleCardItem}>
              <Text style={styles.filtersSubtitle}>Women</Text>
              <SwitchButton />
            </View>
            {/* <Button title="Hide modal" onPress={() => navigation.goBack()} /> */}
          </SimpleCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FiltersScreen;
