import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useLocation from './Location'
import Viewport from './Viewport';

function Map() {

  // const location = useLocation();

  return(
    // <Viewport>
      <MapView
        style={{height: `50%`, width: `100%`}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        // initialRegion={{
        // latitude: 45.50527180254351,
        // longitude: -122.67506901733977,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421}}
      >
        {/* <Marker draggable
        // coordinate={initialRegion}
        image={require('./../assets/marker.png')}
        // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        /> */}
        <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
      </MapView>
    // </Viewport>
  );
}

export default Map;

// class Map extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { region : {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//     };
//   }
  
//   onRegionChange(region) {
//     this.setState({ region });
//   }

//   render() {
//     return(
//       <MapView
//         style={{height: `50%`, width: `100%`}}
//         provider={PROVIDER_GOOGLE}
//         showsUserLocation={true}
//         initialRegion={{
//         latitude: 45.50527180254351,
//         longitude: -122.67506901733977,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421}}
//         onRegionChange={region => {
//           setLocation({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}
//         onRegionChangeComplete={region => {
//           setLocation({
//             latitude: region.latitude,
//             longitude: region.longitude,
//           });
//         }}
//       >
//         {/* <Marker draggable
//         coordinate={{latitude: 45.50527180254351, longitude: -122.67506901733977 }}
//         image={require('./../assets/marker.png')}
//         // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
//         /> */}
//         <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
//         </MapView>
//     );
//   }
// }

// export default Map;



// export default class Map extends Component {
//   state = {
//     mapRegion: null,
//     lastLat: null,
//     lastLong: null,
//   }

//   componentDidMount() {
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       // Create the object to update this.state.mapRegion through the onRegionChange function
//       let region = {
//         latitude:       position.coords.latitude,
//         longitude:      position.coords.longitude,
//         latitudeDelta:  0.00922*1.5,
//         longitudeDelta: 0.00421*1.5
//       }
//       this.onRegionChange(region, region.latitude, region.longitude);
//     });
//   }

//   onRegionChange(region, lastLat, lastLong) {
//     this.setState({
//       mapRegion: region,
//       // If there are no new values set use the the current ones
//       lastLat: lastLat || this.state.lastLat,
//       lastLong: lastLong || this.state.lastLong
//     });
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   onMapPress(e) {
//     console.log(e.nativeEvent.coordinate.longitude);
//     let region = {
//       latitude:       e.nativeEvent.coordinate.latitude,
//       longitude:      e.nativeEvent.coordinate.longitude,
//       latitudeDelta:  0.00922*1.5,
//       longitudeDelta: 0.00421*1.5
//     }
//     this.onRegionChange(region, region.latitude, region.longitude);
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <MapView
//           style={styles.map}
//           region={this.state.mapRegion}
//           showsUserLocation={true}
//           followUserLocation={true}
//           onRegionChange={this.onRegionChange.bind(this)}
//           onPress={this.onMapPress.bind(this)}>
//           <MapView.Marker
//             coordinate={{
//               latitude: (this.state.lastLat + 0.00050) || -36.82339,
//               longitude: (this.state.lastLong + 0.00050) || -73.03569,
//             }}>
//             <View>
//               <Text style={{color: '#000'}}>
//                 { this.state.lastLong } / { this.state.lastLat }
//               </Text>
//             </View>
//           </MapView.Marker>
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   }
// });