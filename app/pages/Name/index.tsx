import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/app/components/Input'
import styles from './style';
import routes from '@/app/Navigators/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDataActions } from '@/app/redux/UserData/actions';

const Name = ({ navigation }: { navigation: any }) => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state?.UserData?.userData?.payload);

  const handleOnchange = (text: any) => {
    setInputValue(text)
  }
  const handlePage = () => {
    dispatch(addUserDataActions.addUserData({ keyValue: 'name', value: inputValue }));
    navigation.navigate(routes.GENDER);
    setInputValue('')
  }
  return (
    <>
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <SafeAreaView />
      <View style={styles?.headerView}>
        <Text style={styles?.headerText}>Name</Text>
      </View>
      <View style={styles?.nameView}>
        <View>
          <Text style={styles?.titleText}>Enter your name</Text>
          <Input
            value={inputValue}
            label="Enter FirstName"
            onChangeText={handleOnchange}
            bgColor={'#ffffff'}
            style={styles?.input}
          />
        </View>
        <TouchableOpacity style={[styles?.btnView,inputValue.trim() ? {opacity:1} : {opacity:0.5}]} disabled={inputValue.trim() ? false : true} onPress={handlePage}>
          <Text style={styles?.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default Name