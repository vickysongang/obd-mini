import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class User extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <Text>Hello User!</Text>
      </View>
    )
  }
}
