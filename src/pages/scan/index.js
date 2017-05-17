/* @flow */

import React, { Component } from 'react';
import { QRScannerView } from 'ac-qrcode';

class ScanPreview extends Component {
  static navigationOptions = {
    title: '扫码'
  };

  render() {
    return (
      <QRScannerView onScanResultReceived={this.barcodeReceived } renderTopBarView={() => {
      }} renderBottomMenuView={() => {
      }}/>
    );
  }

  barcodeReceived = (e) => {
    console.log(e.data);
  }
}

export default ScanPreview;

