import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, IconButton, Colors } from 'react-native-paper';

function AppBar(props) {
    const styles = StyleSheet.create({
        default: {
            backgroundColor: '#ba1c40',
            marginLeft:50,
            //marginBottom:20

        }
    });

    return (
        <Appbar.Header style={styles.default}>
            <IconButton
                icon={require('../assets/images/logo.png')}
                color={Colors.white}
                size={150}
                onPress={() => console.log('Pressed')}
            />
            <Appbar.Content title=""
                subtitle="" />
        </Appbar.Header>
    )
}

export default AppBar;