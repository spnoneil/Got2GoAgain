import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen({route, navigation}) {
  const { marker } = route.params;
  console.log(marker)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{marker.city}, {marker.state}</Text>
      <Text>{marker.name}</Text>
      <Text>{marker.street}</Text>
      <Text>{marker.accessible === true ? 'ADA Accessible!' : 'NOT ACCESSIBLE'}</Text>
      <Text>{marker.unisex === true ? 'Non-gendered' : 'Gendered'}</Text>
      <Text>{marker.directions}</Text>
      <Text>{marker.comment}</Text>
    </View>
  );
}

export default DetailsScreen;