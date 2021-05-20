import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Map from './../components/Map'
import { Image, StyleSheet } from 'react-native'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./../assets/logo.png')} style={styling.image} />
      <Text style={styling.textHeader}>"When you gotta, we got ya!"</Text>
      <Map />
      <Button
        style={styling.button}
        title="Add a Bathroom"
        onPress={() => navigation.navigate('AddBathroom')}
      />
      <Button
        style={styling.button}
        title="About"
        onPress={() => navigation.navigate('About')}
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
    marginTop: 3
  },
  textHeader: {
    fontSize: 20,
  }
})

export default HomeScreen;