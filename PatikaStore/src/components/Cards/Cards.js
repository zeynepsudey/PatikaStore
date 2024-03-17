import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Cards.style'

const Cards = ({store}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: store.imgURL}}></Image>
            <Text style={styles.title}>{store.title}</Text>
            <Text style={styles.price}>{store.price}</Text>
            <Text style={styles.inStock} >{store.inStock ? "" : "STOKTA YOK"}</Text>
        </View>

    );
};

export default Cards;