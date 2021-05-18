import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Map from './../components/Map'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Map />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;