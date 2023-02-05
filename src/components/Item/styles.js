import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container:{          
        width:'100%',  
        marginTop: 20,         
    },
    
    lista:{       
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,     
        marginHorizontal: 16,    
        borderBottomWidth: 1,
        borderBottomColor: '#eee',            
    },    
    itens:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 16,        
        color: '#aaa',
    },
   
    imagem:{
        width: 50,
        height: 50,
    }
});

export default styles;