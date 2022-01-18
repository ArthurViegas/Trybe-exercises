import React from 'react';
import Header from '../components/Header';
import SpendigForm from '../components/SpendingsForm';
import SpendingsTable from '../components/SpendingsTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SpendigForm />
        <SpendingsTable />
      </>
    );
  }
}

export default Wallet;
