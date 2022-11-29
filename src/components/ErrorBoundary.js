import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidCatch(error, info) {
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error has Occured Homie</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;