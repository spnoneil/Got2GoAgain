import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, {Component, useState} from 'react';
import useLocation from './Location'

// function Map() {
// //   const location = useLocation();
// // console.log(location);
//   return(
//     <MapView
//       style={{height: `50%`, width: `100%`}}
//       provider={PROVIDER_GOOGLE}
//       showsUserLocation={true}
//       // initialRegion={{
//       // latitude: 45.50527180254351,
//       // longitude: -122.67506901733977,
//       // latitudeDelta: 0.0922,
//       // longitudeDelta: 0.0421}}
//     >
//       {/* <Marker draggable
//       // coordinate={initialRegion}
//       image={require('./../assets/marker.png')}
//       // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
//       /> */}
//       <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
//       </MapView>
//   );
// }

// export default Map;

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = { region : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
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
        onRegionChange={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
      >
        {/* <Marker draggable
        coordinate={{latitude: 45.50527180254351, longitude: -122.67506901733977 }}
        image={require('./../assets/marker.png')}
        // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        /> */}
        <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
        </MapView>
    );
  }
}

export default Map;