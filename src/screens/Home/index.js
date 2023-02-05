import { View, FlatList} from "react-native";
import Button from "../../components/Button";
import DetailsCesta from "../../components/DetailsCesta";
import Header from "../../components/Header";
import Item from "../../components/Item";
import Fonts from "../../components/Fonts";
import styles from "./styles";


export default function Home({header, details, itens}) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent = {()=>{
          return <>
          <Header {...header} />  
          <View style={styles.container}>
          <DetailsCesta {...details}/> 
          <Button name="Comprar" />   
          <Fonts style={styles.titulo}>{itens.titulo}</Fonts>   
      </View>    
          </>
        }}
        />    
      
       
      </>      
  );
}
