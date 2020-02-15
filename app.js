import React from 'react';
import { StyleSheet, Text, View ,Button, Alert,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.bigBlue}>Master (Tamil)</Text>
       
<Image source={require('./master.jpg')}  style={styles.imgcss} />
     <Button color="#FF0B04"
          title="Buy tickets"
          onPress={() => Alert.alert(
  'coming soon',
  'you need Reserve the ticket',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
)}
        />
        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
 bigBlue: {
    color: '#464440',
    fontWeight: 'bold',
    fontSize: 30,
  },
imgcss: {
    width: 250,
    height: 350,
    borderRadius: 10 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "gray"
  }
});
