import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
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
    return (
        <View style={{
            paddingVertical: 60,
            backgroundColor: '#e0e0e0',
            flex: 1,
        }}>
            <Text>PostsList</Text>
        </View>
    )
}

export default PostsList