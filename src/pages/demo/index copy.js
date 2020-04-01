import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setDemoList} from '../../store/demo/action'

import ColorBox from '../../components/color-box'
import Button from '../../components/button'

class Demo extends Component {
    componentDidMount () {
        document.title = 'helloworld'
        console.log(this.props, 'demo didMount')
    }

    btnClick = () => {
        this.props.setDemoList([{name: 1231}])
    }

    render() {
        return (
            <div>
                <div>demo page</div>
                <Button onClick={this.btnClick}>this is button</Button>
                <ColorBox />
                <ul>
                    {
                        this.props.list.map(item => (<li key={item.name}>{item.name}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state) => ({list: state.demo.demoList}), {setDemoList})(Demo)
