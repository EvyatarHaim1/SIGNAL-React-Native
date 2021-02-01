import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { auth } from '../firebase';

const CustomListItem = () => {

    console.log(auth.currentUser.photoURL)
    return (
        <ListItem>
            <Avatar rounded
                    source={{
                        uri: auth?.currentUser?.photoURL || "https://www.pinclipart.com/picdir/middle/547-5475593_blank-person-avatar-clipart.png",
                    }}
            />
            <ListItem.Content>
                 <ListItem.Title style={{ fontWeight: "800" }}> Youtube Chat </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
