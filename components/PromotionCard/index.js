import React, { Component, useState } from 'react';
import { View, Text, TouchableHighlight, Image, Linking, StyleSheet } from 'react-native'

export default function PromotionCard(props) {
    const [state, setState] = useState({
      imageUri: props.data.imageUri,
      title: props.data.title,
      price: props.data.price,
      linkUrl: props.data.linkUrl
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Image style={styles.promotionImage} source={{ uri: state.imageUri }} />
          <View style={styles.descriptionText}>
            <Text style={styles.titleText}>{state.title}</Text>
            <Text style={styles.titleText}>{state.price}</Text>
            <TouchableHighlight
              style={styles.linkButton}
              onPress={async () => {
                const supported = await Linking.canOpenURL(state.linkUrl);
                if (supported) {
                  await Linking.openURL(state.linkUrl);
                }
              }}
            >
              <Text style={styles.textLinkButton}>Ir para Loja</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    cardView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        minHeight: 200
      },
      promotionImage: {
        width: '50%'
      },
      descriptionText: {
        flex: 1
      },
      titleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
      },
      priceText: {
        color: "#e73931",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
      },
      linkButton: {
        backgroundColor: "#2196F3",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
      textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
      }
})