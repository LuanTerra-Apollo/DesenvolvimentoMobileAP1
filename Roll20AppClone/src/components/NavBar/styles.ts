import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '100%',
        height: 48,
        backgroundColor: '#14141c'
    },
    navBarLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    navBarRight: {
        flexDirection: 'row',
        alighItems: 'center'
    },
    navBarText: {
        color: 'white',
        textAlignVertical: 'center',
        marginLeft: 8
    },
})