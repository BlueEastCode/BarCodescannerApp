import React, { useState, useEffect } from 'react';
import { Text, View, Button,Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import   {styles} from '../../styles'
import  {Scan}  from '../Scan'
export  function BarCode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [visible, setVisible] = useState(false);
const  {ProductInfo} =props;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setVisible(true);
    ProductInfo(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
        <Modal  visible={visible}>
            <View style={styles.container}>
            <Button  title='goBack'  onPress={() => setVisible(false)}>go Back</Button>

            <Text style={styles.values}>Please scan BarCode </Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{height:400}}
            />
            </View>
        </Modal>

<Scan  onPress={() => setVisible(true)}/>
    </View>
  );
}