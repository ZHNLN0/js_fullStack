import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor (props) {
    super(props); 
    // 将Component基类的方法执行一下，要用constructor 一定要super一下 
    // 状态初始化 data => state
    this.state = {
      list: [
        '5:00 起床',
        'coding',
        '00:00 sleep'
      ],
      inputVal: ''
    }

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    let {list, inputVal} = this.state
    return (
      <View className='index'>
        <Input className="input" type="text" value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Text className="add" onClick={this.addItem.bind(this)} >添加</Text>
        {
          list.map((item, index) => {
            return (
              <view>
                <text>{index + 1}.{item}</text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>删除</Text>
              </view>
            )
          })
        }
       
      </View>
    )
  }

  inputHandler (e) {
    this.inputVal = e.target.value
    this.setState({
      inputVal
    })
  }
  addItem () {
    let { list } = this.state
    const inputVal = this.inputVal
    if(inputVal == '' ) return 
    else{
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  delItem(index) {
    let {list} = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
