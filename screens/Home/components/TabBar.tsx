import React from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgCss } from 'react-native-svg'
import * as RootNavigation from '../../../RootNavigation'
const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="376" height="55" viewBox="0 0 376 55">
<path id="tabbar" d="M7.854,0,152,1s8.822,36.4,40,35.98C224.476,36.564,232,1,232,1L368.146,0A7.928,7.928,0,0,1,376,8V47a7.928,7.928,0,0,1-7.854,8H7.854A7.928,7.928,0,0,1,0,47V8A7.928,7.928,0,0,1,7.854,0Z" fill="#fff"/>
</svg>
`

export default function TabBar(params){
    const theme =  params.theme
    const color =  params.color;
    return (
    <SafeAreaView style={{width: Dimensions.get('window').width,
     position: 'relative', 
     bottom: 0,
     paddingHorizontal: 2,
     backgroundColor: color.primary
        }}> 
        <View style={{
                alignItems: 'center',
                padding: 2,
                justifyContent: 'center',
                height: 60,
                backgroundColor: 'rgba(255, 255, 255, 0.83)',
                flexDirection: 'row',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20
                        }}>
            <TouchableOpacity  onPress={()=>{ RootNavigation.navigate('dashboard');}}>
        <Icon
             containerStyle={{
                 marginHorizontal: 60,
                
             }}
             size={35}
            name='dashcube'
            type='font-awesome'
            color={color.secondary}
           tvParallaxProperties={undefined}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ RootNavigation.navigate('reffer');}}>
        <Icon
             containerStyle={{
                marginHorizontal: 60,
             }}
             size={35}
            name='slideshare'
            type='font-awesome'
            color={color.secondary}
           tvParallaxProperties={undefined}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon
             containerStyle={{
                marginHorizontal: 60
             }}
             size={35}
            name='user'
            type='font-awesome'
            color={color.secondary}
           tvParallaxProperties={undefined}/>
        </TouchableOpacity>
        </View>
        {/* <SvgCss xml={xml} width="100%" height="100%" style={{height:'100%', width: '100%', position: 'absolute' , right: 2}} /> */}
       
       
   
         {/* <SvgCss xml={xml} width="100%" height="100%" style={{height:'100%', width: '100%', position: 'absolute' , right: 2}} /> */}
         
        
    </SafeAreaView>)
}