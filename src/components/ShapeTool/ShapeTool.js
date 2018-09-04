import React, { Component } from 'react'
import { Rectangle, Circle, Triangle, CornerBox } from 'react-shapes'
import { Palette } from '../../assets/palette/Palette'
import UserInput from '../UserInput/UserInput'

export default class ShapeTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 200,
            height: 200,
            stroke: 1
        }

        this.renderS = this.renderS.bind(this)
    }

    onWidthChange(newValue) {
        console.log('onWidthChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value)

        this.setState({ width: intValue })

    }

    onHeightChange(newValue) {
        console.log('onHeightChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value)

        this.setState({ height: intValue })

    }

    onStrokeChange(newValue) {
        console.log('onStrokeChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value)

        this.setState({ stroke: intValue })

    }

    renderS() {
        return (
            <Rectangle
                style={styles.shape}
                width={this.state.width}
                height={this.state.height}
                fill={{ color: Palette.light }}
                stroke={{ color: Palette.veryDark }}
                strokeWidth={this.state.stroke}
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

                <text>Stroke</text>
                <UserInput value={this.state.stroke} onChange={value => this.onStrokeChange(value)} />

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
