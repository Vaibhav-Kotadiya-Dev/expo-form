import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/app/components/Input'
import styles from './style';
import routes from '@/app/Navigators/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDataActions } from '@/app/redux/UserData/actions';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
const dataArray = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Other', value: '3' },
];

const Gender = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state?.UserData?.userData);
  const handlePage = () => {
    dispatch(addUserDataActions.addUserData({ keyValue: 'gender', value: value }));

    navigation.navigate(routes.CHILD);
  }

  return (
    <>
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <SafeAreaView />
      <View style={styles?.headerView}>
        <Text style={styles.headerText}>Gender</Text>
      </View>
      <View style={styles?.nameView}>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataArray}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!value ? 'Select item' : `${value}`}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item: any) => {
              setValue(item.label);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <TouchableOpacity style={[styles?.btnView,value ? {opacity:1} : {opacity:0.5}]} disabled={value ? false : true} onPress={handlePage}>
          <Text style={styles?.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default Gender