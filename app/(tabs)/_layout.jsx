import { View, Text, Image,} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons} from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
  return(
    <View>
    <Image
     source={icon}
     resizeMode="contain"
    className="w-6 h-6"
     />
  </View>
  )
}


const TabLayout = () =>{
 return (
  <>
    <Tabs>
      <Tabs.Screen
          name="home" 
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.home}
               color={color}
               name="home"
               focused={focused}
              />
            )
          }}
       />//end of home icon

<Tabs.Screen
          name="menu" 
          options={{
            title:'Menu',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.menu}
               color={color}
               name="menu"
               focused={focused}
              />
            )
          }}
       />//end of menu icon

        <Tabs.Screen
          name="likes" 
          options={{
            title:'Likes',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.likes}
               color={color}
               name="likes"
               focused={focused}
              />
            )
          }}
       />//end of likes icon
       
<Tabs.Screen
          name="cart" 
          options={{
            title:'Cart',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.cart}
               color={color}
               name="cart"
               focused={focused}
              />
            )
          }}
       />//end of cart icon
       
       <Tabs.Screen
          name="profile" 
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.profile}
               color={color}
               name="profile"
               focused={focused}
              />
            )
          }}
       />//end of profile icon
       

      </Tabs>  
     </>
 ) 
}

export default TabLayout