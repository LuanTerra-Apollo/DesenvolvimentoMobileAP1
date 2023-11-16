import { View, Text, ViewProps } from "react-native";
import { AntDesign, SimpleLineIcons, Fontisto, Entypo } from '@expo/vector-icons';
import { styles } from './styles'
import React from 'react'

interface Rota {
    name: string;
    navegar: () => void;
}

interface NavbarProps extends ViewProps {
    link: string,
    rotas: Rota[]
} 

export const NavBar = ({link, rotas, ...rest}: NavbarProps) => {
    return (
        <View style={styles.navBarContainer}>
            <View style={styles.navBarLeft}>
                <AntDesign onPress={() => rotas[0].navegar()} name="close" size={30} color="white" style={[{marginLeft: 8}]} />
                <SimpleLineIcons name="lock" size={16} color="white" style={[{marginLeft: 24}, {marginBottom: 2}]} />
                <Text style={styles.navBarText}>{link}</Text>
            </View>
            <View style={styles.navBarRight}>
                <Fontisto name="share" size={24} color="white" style={[{marginRight: 24}]} />
                <Entypo name="dots-three-vertical" size={24} color="white" style={[{marginRight: 8}]} />
            </View>
        </View>
    )
}

