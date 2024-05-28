import { Platform, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/app/components/Input'
import styles from './style';
import routes from '@/app/Navigators/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDataActions } from '@/app/redux/UserData/actions';
import { Entypo } from '@expo/vector-icons';

const Child = ({ navigation }: { navigation: any }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [childName, setChildName] = useState<string[]>([])
  const [edit, setEdit] = useState(false)
  const [editID, setEditId] = useState(-1);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state?.UserData?.userData);
  const handleOnchange = (text: any) => {
    setInputValue(text)
  }
  const handleDelete = (index: number) => {
    const deleteArrary = childName?.filter((item, i) => index !== i)
    setChildName(deleteArrary)
  }
  const handleEditName = (value: string, index: number) => {
    setEdit(true)
    setInputValue(value)
    setEditId(index)
  }
  const editName = () => {
    let editArray = childName
    editArray?.forEach((item, i) => {
      if (i === editID) {
        editArray[i] = inputValue
      }
    })
    setChildName([...editArray])
    setEdit(false)
    setInputValue("")
  }
  const addName = () => {
    if (inputValue.trim()) {
      setChildName([inputValue, ...childName])
    }
    setInputValue('')
  }
  const handlePage = () => {
    dispatch(addUserDataActions.addUserData({ keyValue: 'childen', value: childName }));
    navigation.navigate(routes.EMAIL);
  }
  return (
    <>
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <SafeAreaView />
      <View style={styles?.headerView}>
        <Text style={styles.headerText}>Child</Text>
      </View>
      <ScrollView>

        <View style={styles?.nameView}>
          <View>
            <Text style={styles?.titleText}>Add your list of childern name</Text>
            <Input
              value={inputValue}
              label="Enter ChildName"
              onChangeText={handleOnchange}
              bgColor={'#ffffff'}
              style={styles?.input}
            />
          </View>
          {childName.length ? <View style={styles?.childDiv}>
            {
              childName?.map((item: any, i: number) => <TouchableOpacity onPress={() => handleEditName(item, i)} style={styles?.childNameDiv}><Text style={styles?.childNameText}>{item}</Text>
                <Entypo name="cross" size={20} color="black" style={styles?.cross} onPress={() => handleDelete(i)} />
              </TouchableOpacity>)
            }
          </View> : null}
          {
            edit ?
              <TouchableOpacity style={styles?.btnView} onPress={editName}>
                <Text style={styles?.btnText}>Edit name</Text>
              </TouchableOpacity> :
              <TouchableOpacity style={styles?.btnView} onPress={addName}>
                <Text style={styles?.btnText}>Add name</Text>
              </TouchableOpacity>
          }
          <TouchableOpacity style={[styles?.btnView, childName.length ? { opacity: 1 } : { opacity: 0.5 }]} disabled={childName.length ? false : true} onPress={handlePage}>
            <Text style={styles?.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>

  )
}

export default Child