import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Button({name}) {
  return (
    <TouchableOpacity 
    style={styles.bntCompras}
    onPress={() =>{}}
    >
      <Text style={styles.texto}>{name}</Text>
    </TouchableOpacity>
  )
}