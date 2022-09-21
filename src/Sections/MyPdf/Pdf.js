import {Document, Font, Page, StyleSheet, View} from '@react-pdf/renderer';

import Amount from './Amount';
import Body from './Body';
import Client from './Client';
import Footer from './Footer';
import Header from './Header';
import {DateTime} from 'luxon';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    fontFamiy: 'Source Sans',
    fontSize: 12,
    lineHeight: 1.4,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 32,
    height: '100vh',
  },
  top: {
    flex: 1,
  },
  h1: {
    fontSize: 32,
    marginBottom: 16,
  },
});

Font.register({
  family: 'Source Sans',
  src: '/fonts/SourceSansPro-Regular.otf',
});

Font.register({
  src: `/fonts/SourceSansPro-Bold.otf`,
  family: 'Source Sans',
  fontWeight: 'bold',
});

Font.register({
  src: `/fonts/SourceSansPro-It.otf`,
  family: 'Source Sans',
  fontStyle: 'italic',
});

function Invoice({customerData}) {
  if (customerData) {
    console.log(customerData);

    const data = {
      formType: 'invoice',
      date: DateTime.now().toISODate(),
      to: customerData.User.email,
      amount: customerData.total_price,
      body: `Car rental for ${
        customerData.Car !== null ? customerData.Car.name : 'Innova'
      } (${
        customerData.Car ? customerData.Car.category : '6 - 8 Person'
      }) in ${Math.round(
        customerData.total_price /
          (customerData.Car !== null ? customerData.Car.price : 1000000)
      )} ${
        Math.round(
          customerData.total_price /
            (customerData.Car !== null ? customerData.Car.price : 1000000)
        ) === 1
          ? 'day'
          : 'days'
      } from ${customerData.start_rent_at
        .split('T')[0]
        .split('-')
        .reverse()
        .join('-')} to ${customerData.finish_rent_at
        .split('T')[0]
        .split('-')
        .reverse()
        .join('-')}`,
    };

    const {body, formType, date, to, address, jobLocation, phone, amount} =
      data;

    const formTypeName = 'Invoice';

    return (
      <Document>
        <Page style={styles.body} wrap>
          <View style={styles.top}>
            <Header date={date} formTypeName={formTypeName} />
            <Client to={to} phone={phone} address={address} />
            <Body formType={formType} body={body} jobLocation={jobLocation} />
          </View>
          <View style={styles.bottom}>
            <Amount amount={amount} formType={formType} />
            <Footer />
          </View>
        </Page>
      </Document>
    );
  } else {
    return null;
  }
}

export default Invoice;
