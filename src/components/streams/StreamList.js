import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderLIst() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderLIst()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Object.values is a built in js function
    // takes an object as an argument and takes all the values and inserts them into an array
    return { streams: Object.values(state.streams) }
}



export default connect(mapStateToProps, { fetchStreams })(StreamList)