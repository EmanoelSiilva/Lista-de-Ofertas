import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PromotionFormSearch from '../PromotionFormSearch';

const Logo = require('../../assets/og1.png')

export default function Header() {
 return (
   <View style={styles.sectionHeader}>
    <Image source={ Logo } style={ styles.logoIcon } />
    <PromotionFormSearch/>
   </View>
  );
}

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15, 
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    logoIcon: {
        width: '100%',
        height: 20
    }
})