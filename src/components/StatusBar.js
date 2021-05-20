import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';


const HeaderBar = () => {
  const [hidden, setHidden] = useState(false);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        hidden={hidden} />
      <View style={styles.buttonsContainer}>
        <Button
          title="Full Screen"
          onPress={changeStatusBarVisibility} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#ECF0F1'
  // },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'right',
    marginBottom: 8
  }
});

export default HeaderBar;