import {TouchableOpacity } from 'react-native'
import Font from '../../components/Fonts'
import styles from './styles'

export default function Button({name}) {
  return (
    <TouchableOpacity 
    style={styles.bntCompras}
    onPress={() =>{}}
    >
      <Font style={styles.texto}>{name}</Font>
    </TouchableOpacity>
  )
}