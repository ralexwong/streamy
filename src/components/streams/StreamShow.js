import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef()
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    // builds player incase the component is ever updated
    componentDidUpdate() {
        this.buildPlayer();
    }

    // cleans up some console.log
    componentWillUnmount() {
        this.player.destroy();
    }

    // checks if the player is already set up or the stream does not exist
    // or else, it will set up the player
    buildPlayer() {
        if(this.player || !this.props.stream) {
            return;
        }

        // boilerplate code from flv package to fetch the stream
        this.player = flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        // deconstructing variables
        const { title, description } = this.props.stream

        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)