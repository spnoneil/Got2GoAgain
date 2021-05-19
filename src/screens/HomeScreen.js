import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Map from './../components/Map'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home stuff</Text>
      <Map />
      <Button
        title="Add a Bathroom"
        onPress={() => navigation.navigate('AddBathroom')}
      />
    </View>
  );
}

export default HomeScreen;