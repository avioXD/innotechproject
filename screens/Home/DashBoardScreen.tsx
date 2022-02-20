import React from 'react'
import {  Image,Text, TouchableOpacity,SafeAreaView, View, Dimensions, ScrollView } from "react-native";
import { Avatar, Divider, Icon } from 'react-native-elements';
import { styles } from '../../theme';

import {
    LineChart,
  } from "react-native-chart-kit";
  import { useToast } from 'native-base';
const image_url =
'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'

const reffer =`
`
export default function  DashBoardScreen({params, route})  {
    const theme = route.params.theme
    const color = route.params.color;
     
  return (
        <SafeAreaView style={theme.background}>
           <Avatar
                size={64}
                rounded
                source={ {uri: image_url}}
                key={'adwa'}
                avatarStyle={ {borderWidth: 2, borderColor: 'white' }}
                containerStyle={{ top:20, left: 10,  elevation: 5,position:'absolute' ,zIndex: 5}}
              />
            <View style={{height: Dimensions.get('window').height, marginTop: 10 }}>
           
                <View style={[ {width: '100%', height:'100%', alignItems: 'center', justifyContent: 'flex-start'}]}>
                     <View style={[ {
                         width:  Dimensions.get("window").width-20,
                         padding: 15,
                         margin: 20,
                         
                         borderRadius: 2,
                     }]}>
                          <Text style={[styles.title,{textAlign: 'center', fontSize:25 ,marginLeft: 15}]}>EARNING ANALYTICS</Text>
                          <Divider width={1} style={{marginVertical: 20}} color={'white'} />
                         <View style={{position: 'relative' }}>
                         <Text style={[styles.subtitle,{textAlign: 'center', fontSize: 15}]}>total- <Text style={[styles.title,{textAlign: 'center' , fontSize: 35}]}>{'\u20B9'}2508/-</Text> </Text>
                         </View>
                          
                         
                     </View>
                     <LineChart
                            data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","jul","Aug","Sep"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width-20} // from react-native
                            height={220}
                            yAxisLabel={'\u20B9'}
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: color.secondary,
                            backgroundGradientFrom:color.primary,
                            backgroundGradientTo: color.primary,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                elevation: 3,
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "2",
                                stroke: color.secondary
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 0,
                            borderRadius: 2
                            }}
                        />
            </View>
            </View>
             
        </SafeAreaView>
  )
}

 