import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Map from './../components/Map'
import { Image, StyleSheet } from 'react-native'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./../assets/logo.png')} style={styling.image} />
      {/* <Text>Home stuff</Text> */}
      <Map />
      <Button
      style={styling.button}
        title="Add a Bathroom"
        onPress={() => navigation.navigate('AddBathroom')}
      />
    </View>
  );
}

const styling = StyleSheet.create({
  image: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  button: {
    paddingTop: 3
  }
})

export default HomeScreen;