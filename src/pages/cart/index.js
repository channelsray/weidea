import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import './index.scss';

@connect(({ cart }) => ({
  ...cart,
}))
class Cart extends Component {
  config = {
    navigationBarTitleText: '+',
  };

  render() {
   
    return (
      <View className="cart-page">
        +在这里写
      </View>
    );
  }
}

export default Cart;
