import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ user, common }) => ({
  ...user,
  ...common
}))
class User extends Component {
  config = {
    navigationBarTitleText: '我有',
  };

  render() {
    return (
      <View className="user-page">
        user这里写
      </View>
    );
  }
}

export default User
