import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ home, cart }) => ({
  ...home,
  ...cart
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
  };

  render() {
    return (
      <View className="home-page">
        首页写这里
      </View>
    );
  }
}

export default Index;
