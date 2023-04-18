import React, { Component, useState } from 'react';
import { View, Modal, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

const SearchIcon = require('../../assets/search.png');

export default function PromotionFormSearch() {
 const [modalVisible, setModalVisible] = useState(false)
 return (
    <View>
        <Modal
            animationType='slide'
            transparent={ true }
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false)
            }}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={ () => { return false } }
                        placeholder='Procurar por promoções'
                    />
                    <TouchableHighlight
                        style={styles.closeButton}
                        onPress={ () => {
                            setModalVisible(false)
                        } }
                    >
                        <Text style={ styles.textStyle }>Cancelar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
        <TouchableHighlight
            onPress={() => {
                setModalVisible(true)
            }}
        >
            <Image source={ SearchIcon } style={ styles.searchIcon }/>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 30
    },
    modalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        height: 60
    },
    searchInput: {
        height: 40,
        width: '75%',
        borderColor: '#ECEFF1',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 5
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 15,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },  
    searchIcon: {
        width: 20,
        height: 20
    }
})