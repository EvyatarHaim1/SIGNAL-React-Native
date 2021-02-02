import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { auth } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat}) => {

    return (
        <ListItem key={id} bottomDivider>
            <Avatar rounded
                    source={{
                        uri: "https://www.pinclipart.com/picdir/middle/547-5475593_blank-person-avatar-clipart.png",
                    }}
            />
            <ListItem.Content>
                 <ListItem.Title style={{ fontWeight: "800" }}> {chatName} </ListItem.Title>
                 <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                     this is a test Subtitle
                 </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
