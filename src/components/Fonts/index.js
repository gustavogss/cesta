import { Text } from "react-native";
import styles from "./styles";

export default function Fonts({ children, style }) {
  let estilo = styles.texto;
  if (style?.fontWeight === "bold") {
    estilo = styles.textoBold;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
}
