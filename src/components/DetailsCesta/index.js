import Font from "../Fonts";
import { View, Image } from "react-native";
import logo from "../../../assets/logo.png";
import styles from "./styles";

export default function DetailsCesta() {
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image source={logo} style={styles.logo} />
        <Font style={styles.nameFarm}>Hort Fruit Farm</Font>
      </View>
      <Font style={styles.name}>Cesta de Verduras</Font>
      <Font>
        Uma cesta de produtos orgânicos selecionados diretamente da fazenda
      </Font>
      <Font style={styles.price}>R$ 40,00</Font>
    </View>
  );
}
