import { Image, Text } from "react-native";
import topo from "../../../assets/topo.png";
import styles from "./styles";

export default function Header({title}) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.title}>{title}</Text>
    </>
  );
}
