import React from 'react';
import { View, Text, Image} from 'react-native'

console.log("zeynep")
const SongCard =({item}) =>{
    console.log(item)


    return(
        <View >
        
        <Image style={{width: 150, height: 150}} source={{uri : item.imageUrl}}/>
              

            <View>
                    <Text>{item.title}</Text>
                    <View>
                        <Text>{item.artist}</Text>
                        <Text>{item.year}</Text>
                    </View>
            </View>
                

            
        </View>
    )
}

export default SongCard;