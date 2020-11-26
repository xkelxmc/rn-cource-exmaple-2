import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/actions/posts/posts";

const PostsList = () => {
    const {isLoading, posts, errors} = useSelector(store => store.posts)
    const dispatch = useDispatch();
    console.log({isLoading, posts, errors})
    useEffect(() => {
        dispatch({type: 'TEST_ACTION'})
        dispatch(getPosts())
    }, [])
    const renderItem = ({item}) => <View style={{borderBottomWidth: 1, paddingVertical: 10, paddingHorizontal: 16}}>
        <Text style={{fontSize: 20, marginBottom: 8}}>{item.title}</Text>
        <Text>{item.body}</Text>
    </View>


    return (
        <View style={{
            paddingVertical: 60,
            backgroundColor: '#e0e0e0',
            flex: 1,
        }}>
            {isLoading ? <ActivityIndicator/> : null}
            <FlatList data={posts} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}

export default PostsList