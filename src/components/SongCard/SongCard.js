import React from 'react';
import { View, Text, Image} from 'react-native'

console.log("zeynep")
const SongCard =({item}) =>{
    console.log(item)


    return(
        <View style={{width: 200, height: 200}}>
            <Image />
            <View>
                <Text>{item.title}</Text>
                <View>
                    <Text>{item.artist}</Text>
                    <Text>{item.year}</Text>
                    <Text>{item.images}</Text>

                </View>

            </View>
        </View>
    )
}

export default SongCard;