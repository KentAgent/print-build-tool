import React, { Component } from 'react'
import { Rectangle, Circle, Triangle, CornerBox } from 'react-shapes'
import { Palette } from '../../assets/palette/Palette'
import UserInput from '../UserInput/UserInput'

export default class ShapeTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 200,
            height: 200
        }

        this.renderS = this.renderS.bind(this)
    }

    onWidthChange(newValue) {
        console.log('onWidthChange Value: ', newValue.target.value)

        this.setState({ width: newValue.target.value })

        // if (newValue.target.value < 10) {
        //     this.setState({ width: 10 })
        // }
        // else if (newValue.target.value > 500) {
        //     this.setState({ width: 500 })
        // }

    }

    onHeightChange(newValue) {
        console.log('onHeightChange Value: ', newValue.target.value)

        this.setState({ height: newValue.target.value })

        // if (newValue.target.value < 10) {
        //     this.setState({ height: 10 })
        // }
        // else if (newValue.target.value > 500) {
        //     this.setState({ height: 500 })
        // }

    }

    // renderShape(width, height) {
    //     return (
    //         <Triangle
    //             style={styles.shape}
    //             width={width}
    //             height={height}
    //             fill={{ color: Palette.light }}
    //             stroke={{ color: Palette.veryDark }}
    //             strokeWidth={1}
    //         />
    //     )
    // }

    renderS() {
        return (
            <Rectangle
                style={styles.shape}
                width={this.state.width}
                height={this.state.height}
                fill={{ color: Palette.light }}
                stroke={{ color: Palette.veryDark }}
                strokeWidth={1}
            />
        )
    }

    render() {
        return (
            <div>

                <text>Width</text>
                <UserInput value={this.state.width} onChange={value => this.onWidthChange(value)} />

                <text>Height</text>
                <UserInput value={this.state.height} onChange={value => this.onHeightChange(value)} />

                <div style={styles.container}>
                    {this.renderS()}
                </div>

            </div>
        )
    }
}

const styles = {
    container: {
        width: 600,
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: 30
    },
    shape: {
        alignSelf: 'center'
    }
}
