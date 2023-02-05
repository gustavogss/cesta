import { View, Image } from 'react-native'
import Font from '../../components/Fonts';
import styles from './styles'

export default function Itens({titulo, lista}) {
  return (
    <View style={styles.container}>
      <Font style={styles.texto}>{titulo}</Font>
        {lista.map(({nome, imagem})=>{
            return <View style={styles.lista} key={nome}>
                <Image source={imagem} style={styles.imagem}/>
                <Font style={styles.itens} >{nome}</Font>                
                </View>
        })}
    </View>
  )
}