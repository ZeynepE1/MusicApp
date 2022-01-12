import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Songard.styles'

console.log("zeynep")
const SongCard = ({ item }) => {
    console.log(item)


    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: item.imageUrl }} />


            <View style={styles.inner_container}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{item.artist}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                    </View>

                    {item.isSoldOut && (
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>TÜKENDİ</Text>
                        </View>
                    )}

                </View>

            </View>



        </View>
    )
}

export default SongCard;