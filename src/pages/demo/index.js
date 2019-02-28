import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setDemoList} from '../../store/demo/action'

import ColorBox from '../../components/color-box'
import Button from '../../components/button'

class Demo extends Component {
    componentDidMount () {
        console.log(this.props, 123)
    }

    btnClick() {
        this.props.setDemoList([{name: 1231}])
    }

    render() {
        return (
            <div>
                <div onClick={this.btnClick.bind(this)}>demo page</div>
                <Button>this is button</Button>
                <ColorBox />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {list: state.demo.demoList}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDemoList: list => dispatch(setDemoList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
