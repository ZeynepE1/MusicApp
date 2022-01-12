import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import music from './music.json';
import SongCard from './components/SongCard'


const renderSong = ({item})=><SongCard item={item}/>
  
const renderSeperator = () => <View style={styles.seperator}/>

function App() {
  return (
  <SafeAreaView >
    <View >
      <FlatList
        keyExtractor={item => item.id}
        data={music}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />

    </View>
  </SafeAreaView>
  )}


const styles = StyleSheet.create({
  
  seperator :{
    borderWidth:1,
    borderColor:'pink'
  }
})


export default App;