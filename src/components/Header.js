import * as React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import AppLogo from "./AppLogo";
import { Common } from '../styles/shared/index';

function Header(props) {
    return (
        <View style={Common.header}>
            <AppLogo></AppLogo>
            <IconButton icon="menu" size={32} color="white" onPress={() => props.navigation.openDrawer()} />
        </View>
    )
}


export default Header;