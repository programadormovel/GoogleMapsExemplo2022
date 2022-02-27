import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Aula de Mapa do Google</Text>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: -23.5107601,
          longitude: -46.8673576,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
