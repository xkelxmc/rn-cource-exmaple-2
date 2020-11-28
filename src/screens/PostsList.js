import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Switch, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/actions/posts/posts";
import ExampleComponent from "../components/ExampleComponent";

const PostsList = () => {
    const [toggle, setToggle] = useState(true)

    const {isLoading, posts, errors} = useSelector(store => store.posts)
    const dispatch = useDispatch();
    // console.log({isLoading, posts, errors})
    useEffect(() => {
        dispatch({type: 'TEST_ACTION', qwe: 'asd'})
        dispatch({type: 'TEST_ACTION_2', test: 42})
        dispatch(getPosts())
    }, [])

    useEffect(() => {
        console.log(posts)
        if(posts.length > 10) {
            // Alert.alert('Пришло больше 10 постов')
        }
    }, [posts])
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
            <Switch value={toggle} onChange={(change) => {
                const a = change.nativeEvent.value
                setToggle(a)
            }}/>
            {toggle ? <ExampleComponent/> : null}

            {isLoading ? <ActivityIndicator/> : null}
            <FlatList data={posts} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}

export default PostsList