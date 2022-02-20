 
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface ColorModel{
    primary: string,
    secondary: string,
    textPrimary: string,
    textSecondary: string,
    
}

export const LightTheme: ColorModel = {
    primary: '#307FBB' ,
    secondary: '#ed4f42' ,
    textPrimary: '#3b3e4a' ,
    textSecondary:  '#d3d6df' ,
     
}
export const DarkTheme: ColorModel =  {
    primary: '#ed4f42' ,
    secondary: '#307FBB' ,
    textPrimary:  '#d3d6df' ,
    textSecondary: '#3b3e4a' ,
    
}

import { StyleSheet } from "react-native"
export function ThemeSelector(mode: any){
    let themeStyles 
    let pallet = mode === 'dark' ? DarkTheme: LightTheme
        themeStyles= StyleSheet.create( {
            background:{ backgroundColor : pallet.primary},
            container : {
                flex: 1,
                alignItems: 'center',
                justifyContent:"center",
                position: 'relative',
                backgroundColor: pallet.textSecondary
              },
            textColor:{ color:  pallet.textPrimary } ,
            textDark: {color: pallet.textSecondary},
            coloredborder:{ borderColor: pallet.secondary} ,
            secBackground:{backgroundColor : pallet.secondary}  ,
            input:{
                width: windowWidth-50,
                borderWidth: 3,
                padding: 15,
                color: '#ebf8ff',
                fontSize: 20,
                borderRadius: 100,
                paddingHorizontal: 25,
                borderColor:'white'
            },
            shadow: {  
                borderColor:'yourchoice', // if you need 
                borderWidth:1,
                overflow: 'hidden',
                shadowColor: 'yourchoice',
                shadowRadius: 10,
                shadowOpacity: 1,
              }
       } )   
        return themeStyles
}
export const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      justifyContent:"center",
      position: 'relative'
    },
    centerAlign: {
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        width: windowWidth-50,
        borderWidth: 3,
        padding: 15,
        color: '#ebf8ff',
        fontSize: 20,
        borderRadius: 100,
        paddingHorizontal: 25,
    },
    title: {
        fontWeight: '800',
        fontSize: 20,
        color: '#e9ecf5',
        fontFamily: 'Poppins-Regular', 
    },
    subtitle:{
        fontWeight: '400',
        fontSize: 15,
        color: '#e9ecf5',
        fontFamily: 'Poppins-Regular' 
    }
    
  });