import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#14141c'
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '100%',
        height: 48,
        backgroundColor: '#14141c'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRight: {
        flexDirection: 'row',
        alighItems: 'center'
    },
    headerText: {
        color: 'white',
        textAlignVertical: 'center',
        marginLeft: 8
    },
    viewTop:{
        width: '100%',
        height: '15%'
    },
    topImage: {
        width: '100%',
        height: '100%',
    },
    viewBottom: {
        paddingHorizontal: 18,
        paddingVertical: 12
    },
    background: {
        flex: 1,
        height: '100%'
    },
    bottomText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 8
    },
    bottomTextInput: {
        alignSelf: 'center',
        width: '100%',
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 8,
        paddingLeft: 16,
        fontSize: 16,
        color: '#fff'
    },
    bottomButton: {
        marginTop: 16,
        height: 48,
        backgroundColor: '#ec0b8d', 
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})