import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Button } from 'react-native';
import useLocation from './Location'
import PortMapApiAsync from './../api/PortMapAPI'
import { useNavigation } from '@react-navigation/native';
import mapStyle from './../assets/googlemap'

function Map() {
  const [markers, setMarkers] = useState(markers || [])
  const navigation = useNavigation();
  const location = useLocation();

  // const reloadLocation = async (location) => {
  //   const resLoc = await location;
  //     setMarkers(resLoc);
  //   return resLoc;
  // }
  const [region, setRegion] = useState({
    latitude: 45.50527180254351,
    longitude: -122.67506901733977,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421})
    
  const getApiData = async (location) => {
    const markerArray = await PortMapApiAsync(location);
    return markerArray;
  }


  useEffect(() => {
    getApiData()
    .then(response => {
    setMarkers(response);
  })
  }, [])
  // TODO: FIX IMAGE SWITCH
// function markerImg(mark) {
//   return (mark != false ? require('./../assets/nong.png') : require('./../assets/g.png'))
// }

  return(
    <MapView
      customMapStyle={mapStyle}
      style={styling.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      {location === !null ? (
      <Marker 
        coordinate={{
        latitude: location.latitude,
        longitude: location.longitude
      }} />
      ) : null }
      <Marker draggable
      coordinate = {{
        latitude: 45.5109438018,
        longitude: -122.675031346,
      }}
      image={require('./../assets/marker1.png')}
      // TODO: FIX MARKER DRAG
      onMarkerDragEnd={(e) => {this.setState(e.nativeEvent.coordinate) }}
      onPress={() => {<Button title='I A BUTTON'/>}}
      />
      
      {markers[0] != null && markers.map((marker, index) => (
        <MapView.Marker
          key = {index}
          coordinate = {{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
          title = { marker.name }
        >
        <Callout tooltip onPress={() => navigation.navigate('Details', {marker})}>
        </Callout>
        </MapView.Marker>
      ))};
    </MapView>
  );
}

const styling = StyleSheet.create({
  map: {
    height: `50%`, 
    width: `100%`,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  }
})

export default Map;