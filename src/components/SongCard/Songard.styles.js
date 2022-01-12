import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inner_container: {
        
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        justifyContent:'center'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    info_container: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center'
        
    },
    year: {
        marginLeft: 20,
        color: 'gray',
        fontWeight: 'bold',
        fontSize:12
    },
    soldout_container:{
        borderColor:'red',
        borderWidth:1,
        padding: 5,
        borderRadius:5,

    },
    soldout_title:{
        color:'red',
        fontSize:12
    },
    content_container:{
        flexDirection: 'row',
       
    }
})