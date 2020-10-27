import React, { Component, Fragment } from 'react'

type MyProps = {
    // using `interface` is also ok
    message?: any;
};
type MyState = {
    catchedError: boolean
};
export default class ErrorBoundary extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            catchedError: false
        }
    }
    componentDidCatch(error: Error, errorInfo: Object): void {
        //catch errors and re-render with error message
        this.setState({
            catchedError: true
        })
    }
    render(): JSX.Element | React.ReactNode {
        if (this.state.catchedError) {
            return <Fragment>
                <h1>Something went wrong</h1>
            </Fragment>
        }
        return this.props.children;
    }

}