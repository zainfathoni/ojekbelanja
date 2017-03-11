import React, { Component } from 'react';
import base from '../../services/base';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { fetch, update, clear } from '../../services/form';
import Image from '../../components/Image';

export default class DetailProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tokoId: props.params.tokoId
        };
    }

    // Lifecycle
    componentDidMount() {
        let tokos = fetch("tokos");
        if (tokos && tokos[this.props.params.tokoId]) {
            base.fetch("products/" + this.props.params.tokoId, {
                context: this,
                asArray: false,
                then(data) {
                    if (data) {
                        this.setState({ product: data });
                    }
                }
            });
        } else {
            this.context.router.transitionTo(`/editproduct`);
        }
    }

    // End of Lifecycle.

    render() {
        const tokos = fetch("tokos");
        const product = this.state.product;
        const tokoId = this.state.tokoId;

        const onSubmit = function(e, tokoId, key) {
            e.preventDefault();

            let category = document.getElementsByName(`product-${key}-category`)[0].value;
            let desc = document.getElementsByName(`product-${key}-description`)[0].value;
            let name = document.getElementsByName(`product-${key}-name`)[0].value;
            let price = document.getElementsByName(`product-${key}-price`)[0].value;
            let step = document.getElementsByName(`product-${key}-step`)[0].value;
            let unit = document.getElementsByName(`product-${key}-unit`)[0].value;

            base.update(`/products/${tokoId}/${key}`, {
                data: {
                    category: category,
                    desc: desc,
                    name: name,
                    price: price,
                    step: step,
                    unit: unit,
                },
                then(err) {
                    if (!err) {
                        console.log("update completed.");
                        alert("update completed");
                    } else {
                        console.log("error: " + err)
                    }
                }
            }
            );
        }
        const onChange = (field, value) => { }
        const onBlur = (n, v) => { }

        return (
            <div className="l-fullwidth">
                <div className="l-wrapper-MainNav">
                    <MainNav />
                </div>
                {
                    (product && tokos && tokos[tokoId]) ?
                        (<Header heading={`Produk Toko ${tokos[tokoId].name}`} />) :
                        <Header heading={`Loading ...`} />
                }
                <main className="l-main">
                    {
                        (!product || !tokos || !tokos[tokoId]) ?
                            (<div className="content">{`Loading ...`}</div>) :
                            (
                                <div className="content">
                                    {Object.keys(product).map(function(key) {
                                        return (
                                            <div className="content-entry" key={key}>
                                                <Form
                                                    name={`form-product-${key}`}
                                                    title={`Edit Item ${key}`}
                                                    icon={<i className="fa fa-lg fa-address-card" aria-hidden="true"></i>}
                                                    footer={
                                                        <Button
                                                            className="update-button"
                                                            type="submit"
                                                            display="content"
                                                            action={(e) => onSubmit(e, tokoId, key)}
                                                            icon="times"
                                                            text="Update"
                                                            isSecondary
                                                            />
                                                    }
                                                    >
                                                    <Image source={product[key].image} />
                                                    <TextField
                                                        name={`product-${key}-category`}
                                                        type="text"
                                                        label="Category"
                                                        value={product[key].category}
                                                        onChange={onChange}
                                                        required
                                                        />
                                                    <TextField
                                                        name={`product-${key}-description`}
                                                        type="text"
                                                        label="Description"
                                                        value={product[key].desc}
                                                        onChange={onChange}
                                                        required
                                                        />
                                                    <TextField
                                                        name={`product-${key}-name`}
                                                        type="text"
                                                        label="Name"
                                                        value={product[key].name}
                                                        onChange={onChange}
                                                        required
                                                        />
                                                    <TextField
                                                        name={`product-${key}-price`}
                                                        type="number"
                                                        label="Price"
                                                        value={product[key].price}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        noValidation
                                                        required
                                                        />
                                                    <TextField
                                                        name={`product-${key}-step`}
                                                        type="number"
                                                        label="Step"
                                                        value={product[key].step}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        noValidation
                                                        required
                                                        />
                                                    <TextField
                                                        name={`product-${key}-unit`}
                                                        type="text"
                                                        label="Unit"
                                                        value={product[key].unit}
                                                        onChange={onChange}
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
        )
    }
}

DetailProduct.contextTypes = {
    router: React.PropTypes.object,
}