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

function Body({ body }) {

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Rent Details: </Text>
      <Text style={styles.bold}>Specifications for Rent Completed</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.body}>Price includes</Text>
      <Text style={styles.subBody}>1. Car and Fuel</Text>
      <Text style={styles.body}>Price not includes</Text>
      <Text style={styles.subBody}>1. Driver</Text>
      <Text style={styles.subBody}>2. Driver consumption</Text>
      <Text style={styles.subBody}>3. Driver's accommodation</Text>
      <Text style={styles.subBody}>4. Parking fee</Text>
      <Text style={styles.subBody}>5. Driver tips</Text>
    </View>
  )
}

export default Body
