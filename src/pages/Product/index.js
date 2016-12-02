import React from 'react';
import base from '../../services/base';

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tokoId: props.tokoId,
            product: {},
        };
    }

    // Lifecycle

    componentDidMount() {
        base.fetch(`products/${this.state.tokoId}`, {
            context: this,
            asArray: true,
            then(data) {
                this.setState({product: data});
            }
        });
    }

    // End of Lifecycle.

    render() {
        const product = this.state.product;

        if (this.state.tokoId) {
            return(
                Object.keys(product).map(function(key){
                    return (
                        <div>
                            <div>{key}</div>
                            <div></div>
                        </div>
                    )
                })
            );
        }
    }
}