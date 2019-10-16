import React from 'react'
import { connect } from 'react-redux';

const StreamEdit = (props) => {
    console.log(props);
    return (
        <div>
            
        </div>
    )
}


// ownProps displays the props presented to the component
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { streams: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps)(StreamEdit)