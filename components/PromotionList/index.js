import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PromotionCard from '../PromotionCard';


export default function PromotionList() {
 const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Bota Impermeável Bull Terrier Alpina Dry – Masculina',
        price: 'De: R$399,99 - Por: R$299,99',
        imageUri: 'https://irias.com.br/blog/wp-content/uploads/2020/11/bota-impermeavel-bull-terrier-alpina-dry-masculina-img-150x150-1.jpg',
        linkUrl: 'https://www.centauro.com.br/bota-bull-terrier-alpina-dry-masculina-855804.html'
    }
 ]

 return (
   <FlatList
    style={ styles.promotionsList }
    data={data}
    renderItem={ ({ item }) =>  (
        <PromotionCard data={ item } />
    )}
    keyExtractor={ item => item.id }
   />
  );
}

const styles = StyleSheet.create({
    promotionsList: {
        minHeight: '90%',
        maxHeight: '90%',
        backgroundColor: '#ffffff'
    }   
})