import { View, ScrollView } from "react-native";
import Button from "../../components/Button";
import DetailsCesta from "../../components/DetailsCesta";
import Header from "../../components/Header";
import Itens from "../../components/Itens";
import styles from "./styles";

export default function Home({header, details, itens}) {
  return (
    <ScrollView>
      <Header {...header} />  
      <View style={styles.container}>
      <DetailsCesta {...details}/> 
      <Button name="Comprar" />        
      <Itens {...itens} />
      </View>      
      </ScrollView>      
  );
}
