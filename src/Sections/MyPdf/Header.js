import { StyleSheet, Text, View, Image } from '@react-pdf/renderer'
import { DateTime } from 'luxon'
import Logo from '../../Assets/Logo-White.png'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    paddingBottom: 16,
    backgroundColor: '#666',
    color: "white",
    padding: 20,
    borderRadius: "10px",
  },
  h1: {
    fontSize: 24,
    fonttWeight: 600,
  },
  h2: {
    fontSize: 20,
  },
  left: {
    flex: 1,
  },
  right: {
    // textAlign: 'right',
  },
  image: {
    width: 100,
  }
})

function Header({ date, formTypeName }) {
  const formattedDate =
    date && DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.h1}>Binar RentCar</Text>
        <Text>Jakarta, jalan sudirman no.11</Text>
        <Text>0819-2917-3012</Text>
        <Text>RentCar@binar.com</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} src={Logo} />
        <Text style={styles.h2}>{formTypeName}</Text>
        <Text>{formattedDate}</Text>
      </View>
    </View>
  )
}

export default Header
