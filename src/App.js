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
import music from './music.json';
import SongCard from './components/SongCard/SongCard'


const renderItem = ({item})=>{
 return<SongCard item={item}/>
  }

function App() {
  return (
  <SafeAreaView style={styles.container}>
    <View >
      <FlatList
        data={music}
        renderItem={renderItem}
      />

    </View>
  </SafeAreaView>
  )}


const styles = StyleSheet.create({
  container: {flex:1,
  flexDirection:'row',
  backgroundColor:'red'},

})


export default App;