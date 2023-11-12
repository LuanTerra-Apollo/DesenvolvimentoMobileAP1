import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    viewTop: {
        height: '50%'
    },
    topImage: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    topLogo: {
        position: 'absolute',
        width: '80%',
        height: '20%',
        marginTop: 20
    },
    viewBottom: {
        height: '50%',
        backgroundColor: '#141b25',
        paddingHorizontal: 45
    },
    bottomVersion: {
        backgroundColor: '#0d8643',
        width: '40%',
        textAlign: 'center',
        marginTop: 24,
        color: '#fff',
        borderRadius: 8
    },
    bottomTitleText: {
        marginTop: 36,
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },
    bottomSubtitleText: {
        marginTop: 36,
        color: '#fff',
        fontSize: 24,
        width: '65%',
        fontWeight: 'bold'
    },
    bottomButton: {
        backgroundColor: '#702c91',
        marginTop: 48,
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
        marginTop: 42,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    bottomLink: {
        textDecorationLine: 'underline'
    }
})