import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';
import music from './music.json'



function App() {
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
        data={music}
        renderItem={({item})=> <Text>{item.title} </Text>}
      />

      

    </View>
  </SafeAreaView>
}

export default App;

const styles = StyleSheet.create({
  container: {flex:1},

})
