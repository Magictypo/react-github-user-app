import React from "react";

class Spinner extends React.Component {

    render() {
        if (this.props.isLoading) {
            return <div className="text-center" >
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        return null;
    }
}

export default Spinner;
