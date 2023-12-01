import React from "react";

export default class Safe extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch() { }

    render() {
        if (this.state.hasError) {
            return <h1>Somethign went wrong.</h1>
        }
        return this.props.children;
    }
}

