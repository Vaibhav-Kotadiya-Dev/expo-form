import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/app/components/Input'
import styles from './style';
import routes from '@/app/Navigators/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDataActions } from '@/app/redux/UserData/actions';
const input = {
  email: '',
  password: '',
}
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


const Email = ({ navigation }: { navigation: any }) => {
  const [inputValue, setInputValue] = useState(input)
  const [errorEmail, setErrorEmail] = useState('');

  const dispatch = useDispatch();

  const data = useSelector((state: any) => state?.UserData?.userData);
  const handleOnchange = (text: any, type: string) => {
    setInputValue(prevState => ({ ...prevState, [type]: text }));

  }
  const handlePage = () => {
    if (!reg.test(inputValue?.email)) {
      setErrorEmail("Email is not valid");
      return;
    }
    dispatch(addUserDataActions.addUserData({ keyValue: 'loginData', value: { email: inputValue?.email, password: inputValue?.password } }));
    navigation.navigate(routes.NAME);
  }
  return (
    <>
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <SafeAreaView />
      <View style={styles?.headerView}>
        <Text style={styles.headerText}>Email</Text>
      </View>
      <View style={styles?.nameView}>
        <View>
          <Text style={styles?.titleText}>Enter your email</Text>
          <Input
            value={inputValue?.email}
            label="Email"
            onChangeText={text => handleOnchange(text, 'email')}
            bgColor={'#ffffff'}
            style={styles?.input}
          />
          {errorEmail?<Text style={styles?.errorText}>{errorEmail}</Text>:null}
          <Text style={styles?.titleText}>Enter your password</Text>
          <Input
            value={inputValue?.password}
            label="Password"
            onChangeText={text => handleOnchange(text, 'password')}
            bgColor={'#ffffff'}
            style={styles?.input}
          />
        </View>
        <TouchableOpacity style={[styles?.btnView,inputValue?.email?.trim() && inputValue?.password?.trim() ? {opacity:1} : {opacity:0.5}]} disabled={inputValue?.email?.trim() && inputValue?.password?.trim() ? false : true} onPress={handlePage}>
          <Text style={styles?.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default Email