import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    borderTop: '1px double #666',
    marginTop: 24,
    paddingTop: 24,
  },
  bold: {
    fontSize: 11,
  },
  body: {
    borderLeft: '1px solid #aaa',
    lineHeight: 1.8,
    marginLeft: 4,
    marginTop: 12,
    paddingLeft: 8,
    display: "flex",
    alignItems: "center"
  },
  subBody: {
    marginLeft: 4,
    paddingLeft: 8,
  },
})

function Body({ formType, body, jobLocation }) {

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Rent Location: {jobLocation}</Text>
      <Text style={styles.bold}>Specifications for Rent Completed</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.body}>Harga sudah termasuk</Text>
      <Text style={styles.subBody}>1. Mobil dan Bahan Bakar</Text>
      <Text style={styles.body}>Harga tidak termasuk</Text>
      <Text style={styles.subBody}>1. Supir</Text>
      <Text style={styles.subBody}>2. Konsumsi Supir</Text>
      <Text style={styles.subBody}>3. Penginapan Supir</Text>
      <Text style={styles.subBody}>4. Biaya Parkir</Text>
      <Text style={styles.subBody}>5. Tips Supir</Text>
    </View>
  )
}

export default Body
