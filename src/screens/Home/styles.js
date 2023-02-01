import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
      paddingVertical: 8,
      paddingHorizontal: 16,     
    },
    name:{
        fontSize: 20,       
        lineHeight: 42,
        color: '#121212',
        fontFamily:'MontserratBold'
    },
    nameFarm:{
        fontSize: 16,
        lineHeight: 26,       
        marginLeft:12,
        fontFamily:'MontserratRegular'
    },
    description:{
        fontSize: 16,
        lineHeight: 26,
        color: '#212121',        
    },
    price:{
        fontSize: 26,
        lineHeight: 26,
        color: '#009944',
        fontWeight: 'bold',
        lineHeight: 42,
        marginTop: 8
    },
    perfil:{        
        flexDirection:'row',
        paddingVertical:12,        
        alignItems: 'center'        
    },
    logo:{
        width: 40,
        height: 40,
    }
} );

  export default styles;