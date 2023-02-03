import Font from "../Fonts";
import { View, Image } from "react-native";
import styles from "./styles";

export default function DetailsCesta({name, logoFarm, nameFarm, description, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image source={logoFarm} style={styles.logo} />
        <Font style={styles.nameFarm}>{nameFarm}</Font>
      </View>
      <Font style={styles.name}>{name}</Font>
      <Font style={styles.description}>
        {description}
      </Font>
      <Font style={styles.price}>{price}</Font>
    </View>
  );
}
