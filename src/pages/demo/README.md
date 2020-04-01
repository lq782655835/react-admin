# 发送redux两种方式

## 1. dispatch

`这种方式可以不用写Action`。当没有mapDispatchToProps参数时，默认就是这个模式,props会默认带上dispatch属性。

直接dispatch数据即可。

``` js
this.props.dispatch({ type: xxx, payload: yyy })
```

##  2. mapDispatchToProps

写法一：跟上面dispatch类似，mapDispatchToProps集中管理（`此时mapDispatchToProps是函数！！！`）
``` js
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```

写法二： action另外定义

``` js
// Actions
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}
```

写法三： 简写action

内部其实是封装了(`此时mapDispatchToProps是对象！！！`)

``` js
const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

// 等同于
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, reset }, dispatch)
}
```

官网说明：https://react-redux.js.org/using-react-redux/connect-mapdispatch