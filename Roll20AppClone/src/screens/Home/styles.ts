import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    viewTop: {
        height: 370
    },
    topImage: {
        width: '100%',
        height: 400
    },
    topLogo: {
        position: 'absolute',
        width: '80%',
        height: '25%'
    },
    viewBottom: {
        height: 430,
        backgroundColor: '#141b25',
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    bottomVersion: {
        backgroundColor: '#0d8643',
        width: '60%',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 8
    },
    bottomTitleText: {
        marginTop: 16,
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },
    bottomSubtitleText: {
        marginTop: 16,
        color: '#fff',
        fontSize: 24,
        width: '100%',
        fontWeight: 'bold'
    },
    bottomButton: {
        backgroundColor: '#702c91',
        marginTop: 32,
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    bottomTextButton: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    bottomText: {
        marginTop: 24,
        textAlign: 'center',
        fontSize: 14,
        color: '#fff'
    },
    bottomLink: {
        textDecorationLine: 'underline'
    }
})