import React from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStreams(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                StreamEdit
            </div>
        )
    }
}


// ownProps displays the props presented to the component
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return { streams: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStreams })(StreamEdit)