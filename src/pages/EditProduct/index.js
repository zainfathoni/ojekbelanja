import React, { Component } from 'react';
import base from '../../services/base';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { save, update, clear } from '../../services/form';
import Image from '../../components/Image';

export default class EditProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // Lifecycle
    componentDidMount() {
        base.fetch('stores/', {
            context: this,
            asArray: false,
            then(data) {
                if (data) {
                    this.setState({ tokos: data });
                    save("tokos", data)
                }
            }
        });
    }
    // End of Lifecycle

    render() {

        const context = this;
        const tokos = this.state.tokos;
        const onChange = function (f, v) {
            
        };

        const onSubmit = function (e, key) {
            e.preventDefault();

            context.context.router.transitionTo(`/detailproduct/${key}`)
        }

        return (
            <div className="l-fullwidth">
                <div className="l-wrapper-MainNav">
                    <MainNav />
                </div>
                <Header heading={`Product`} />
                <main className="l-main">
                    {
                        !tokos ? (<div className="content">Loading ...</div>) :
                            (
                                <div className="content">
                                    {Object.keys(tokos).map(function (key) {
                                        return (
                                            <div className="content-entry" key={key}>
                                                <Form
                                                    name={`form-toko-${key}`}
                                                    title={`Toko ${tokos[key].name}`}
                                                    icon={<i className="fa fa-lg fa-address-card" aria-hidden="true"></i>}
                                                    footer={
                                                        <Button
                                                            className="update-button"
                                                            type="submit"
                                                            display="content"
                                                            action={(e) => onSubmit(e, key)}
                                                            icon="times"
                                                            text="Cek Produk"
                                                            isSecondary
                                                            />
                                                    }
                                                    >
                                                    <Image source={tokos[key].image} />
                                                    <TextField
                                                        name={`toko-${key}-name`}
                                                        type="text"
                                                        label="Name"
                                                        value={tokos[key].name}
                                                        onChange={onChange}
                                                        disabled
                                                        required
                                                        />
                                                    <TextField
                                                        name={`toko-${key}-area`}
                                                        type="text"
                                                        label="Area"
                                                        value={tokos[key].area}
                                                        onChange={onChange}
                                                        disabled
                                                        required
                                                        />
                                                    <TextField
                                                        name={`toko-${key}-price`}
                                                        type="number"
                                                        label="Cost"
                                                        value={tokos[key].cost}
                                                        onChange={onChange}
                                                        disabled
                                                        noValidation
                                                        />
                                                    <TextField
                                                        name={`product-${key}-phone`}
                                                        type="tel"
                                                        label="Phone"
                                                        value={tokos[key].phone}
                                                        onChange={onChange}
                                                        disabled
                                                        required
                                                        />
                                                </Form>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                    }
                </main>
            </div>
        );
    }
}

EditProduct.contextTypes = {
    router: React.PropTypes.object
}