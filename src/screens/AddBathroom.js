import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import NewBathroomForm from './../components/NewBathroomForm';
import { color } from 'react-native-reanimated';

function AddBathroom() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./../assets/bg.png')} style={styling.image} blurRadius={10}>

        <Text style={styling.text}>Bathroom Stuff</Text>
        <NewBathroomForm />
      </ImageBackground>
    </View>
  );
}

const styling = StyleSheet.create({
  text: {
    marginBottom: 30,
    fontSize: 40,
    fontFamily: 'monospace',
    color: '#B119B6'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
})

export default AddBathroom;