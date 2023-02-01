import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({    
    topo:{
      width: '100%', 
      height: 578/768 * width,
      alignItems: 'center',
    },
    title:{
      width:'100%',
      position:'absolute',
      textAlign:'center',
      color:'#fff',
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 26,
      padding: 50
    }
  });

  export default styles;