import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';



function Map() {
  return(
    <MapView
      style={{height: `50%`, width: `100%`}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
      latitude: 45.50527180254351,
      longitude: -122.67506901733977,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}
    />
  );
}

export default Map;