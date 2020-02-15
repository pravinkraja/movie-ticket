import React from 'react';
import { StyleSheet, Text, View ,Button, Alert,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.bigBlue}>Go Getters</Text>
      
<Image source={require('./gg.png')}  style={{width: 180, height: 140}} />
      <Button
          title="Welcome"
          onPress={() => Alert.alert('Welcome to Go Getters Team')}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 bigBlue: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
