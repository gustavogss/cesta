import { View, Image, FlatList } from "react-native";
import Font from "../Fonts";
import styles from "./styles";

export default function Item({ item: {nome, imagem } }) {
  return <View style={styles.lista}>
      <Image source={imagem} style={styles.imagem} />
      <Font style={styles.itens}>{nome}</Font>
    </View>;
  };

