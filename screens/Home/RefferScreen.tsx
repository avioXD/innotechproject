import React, { useState } from  'react'
import { Button, Dimensions,Image, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Avatar, Divider, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../theme';
import QRCode from 'react-native-qrcode-svg';
let logoFromFile = require('../../assets/splash.png');
import { useClipboard } from 'native-base';







export default function RefferScreen({props, route}){
    const theme = route.params.theme
    const color = route.params.color;
    const [copyText, setCopyText] = useState("KASHDUJAWUH");

    const {
        value,
        onCopy
      } = useClipboard();
    return(
        <SafeAreaView style={theme.background}>
            <View style={[ {width: '100%', height:'100%', alignItems: 'center', justifyContent: 'center'}]}>
                     <Text style={[styles.title, {textAlign: 'center',margin: 8 , marginBottom: 1}]}>Refer Potential Leads & Get 2% Commission on each sell
                     </Text>
                  <View style={[ 
                    {  flexDirection: 'column', marginTop: 5}]} >
                       <Image
                    style={{margin: 10}}
                    source={require('../../assets/reffer.png')}
                    />
             
               
               <TouchableOpacity  onPress={()=>{onCopy(copyText)}}>
               <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
               <Text style={[styles.title, {padding: 10, color: 'gray'}]}>{copyText} 
               </Text>
               <Icon 
                size={20}
                 iconStyle={{margin: 10}} 
                 name='copy'
                 type='font-awesome'
                 color={color.secondary} tvParallaxProperties={undefined} />
                  </View>
                </TouchableOpacity>
               
               
                     <View  style={{
                         flexDirection: 'row',
                         alignItems: 'center',
                         justifyContent: 'center',
                         margin: 20,
                          
                         flexWrap: 'wrap'
                     }}>
            
                         
                    <TouchableOpacity>
                    <Icon
                          raised
                          name='facebook'
                          type='font-awesome'
                          color={color.secondary} tvParallaxProperties={undefined} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon
                          raised
                          name='share'
                          type='font-awesome'
                          color={color.secondary} tvParallaxProperties={undefined} />
                    </TouchableOpacity>
                        <TouchableOpacity>
                    <Icon
                          raised
                          name='whatsapp'
                          type='font-awesome'
                          color={color.secondary} tvParallaxProperties={undefined} />
                    </TouchableOpacity>
                    
                     </View>
                  
                 </View>
                 <QRCode
                 size={170}
                    value="http://awesome.link.qr"
                 />

             </View>
             
    </SafeAreaView>
    )
}