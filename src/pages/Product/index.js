import React from 'react';
import base from '../../services/base';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
        };
    }

    // Lifecycle

    componentDidMount() {
        base.fetch(`products`, {
            context: this,
            asArray: true,
            then(data) {
                this.setState({ toko: data });
            }
        });
    }

    // End of Lifecycle.

    render() {
        const tokos = this.state.toko;
        return (
            <div className="l-fullwidth">
                <div className="l-wrapper-MainNav">
                    <MainNav />
                </div>
                <Header heading={"Product by Toko"} />
                <div className="content">
                    {(!tokos ?
                    (
                        <div className="loading">
                        Loading ...
                        </div>
                    ) :
                    (
                        <div className="tokos">
                        {Object.keys(tokos).map(function(key){
                            return (
                                <div className="toko-entry" key={key}>
                                    <div>{tokos[key]}</div>
                                </div>
                            )
                        })}                            
                        </div>
                    ))}
                </div>
            </div>
        );

    }
}