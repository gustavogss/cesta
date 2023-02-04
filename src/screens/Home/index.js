import { View } from "react-native";
import Button from "../../components/Button";
import DetailsCesta from "../../components/DetailsCesta";
import Header from "../../components/Header";
import styles from "./styles";

export default function Home({header, details}) {
  return (
    <>
      <Header {...header} />
      <DetailsCesta {...details}/>
      <Button name="Comprar" />
    </>
  );
}
