import { View, Text, Image } from 'react-native'
import logo from '../../../assets/logo.png'
import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Cesta de Verduras</Text>
      <View style={styles.perfil}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.nameFarm}>Hort Fruit Farm</Text>
      </View>
      <Text style={styles.description}>Uma cesta de produtos 
        orgânicos selecionados diretamente
        da fazenda
      </Text>
      <Text style={styles.price}>R$ 40,00</Text>
    </View>
  )
}