import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps} from 'react-native'
import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    priority?: 'primary' | 'secondary';
}

export const Button = ({ priority='primary', title, ...rest}: ButtonProps) => {
    return (
        <TouchableOpacity {...rest} style={priority === 'primary' ? styles.buttonSignIn : styles.buttonRegistrar}>
            <Text style={styles.bottomTextButton}>{title}</Text>
        </TouchableOpacity>
    )
}