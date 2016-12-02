import React, { Component } from 'react';
import base from '../../services/base';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

export default class DetailProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tokoId: props.params.tokoId
        };
    }

    // Lifecycle

    componentDidMount() {
        if (this.props.params.tokoId) {
            base.fetch("products/" + this.props.params.tokoId, {
                context: this,
                asArray: false,
                then(data) {
                    if (data) {
                        console.log(data);
                        this.setState({ product: data });
                    }
                }
            });
        }
    }

    // End of Lifecycle.

    render() {
        const product = this.state.product;

        return (
            <div className="l-fullwidth">
                <div className="l-wrapper-MainNav">
                    <MainNav />
                </div>
                <Header heading={"Product " + this.props.params.tokoId} />
                <main className="l-main">
                    {
                        !this.state.product ?
                            (<div className="content">Toko Not Found</div>) :
                            (
                                <div className="content">
                                    {Object.keys(product).map(function (key) {
                                        return (
                                            <div className="content-entry" key={key}>
                                                <div className="key">{key}</div>
                                                <div className="value">
                                                    <table><tbody>
                                                        <tr>
                                                            <td>
                                                                Category
                                                            </td>
                                                            <td>
                                                                <div className="category">
                                                                    <TextField
                                                                        className="product-category"
                                                                        name={`product-${key}-category`}
                                                                        type="text"
                                                                        display="fullwidth"
                                                                        value={product[key].category}
                                                                        onChange={e => console.log(e)}
                                                                        onBlur={e => console.log(e)}
                                                                        noValidation
                                                                        />
                                                                </div>
                                                            </td>
                                                        </tr></tbody>
                                                    </table>
                                                    <div className="description">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Description
                                                                    </td>
                                                                    <td>
                                                                        <TextField
                                                                            className="product-description"
                                                                            name={`product-${key}-description`}
                                                                            type="text"
                                                                            display="fullwidth"
                                                                            value={product[key].desc}
                                                                            onChange={e => console.log(e)}
                                                                            onBlur={e => console.log(e)}
                                                                            noValidation
                                                                            />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="imageholder">
                                                        <image src={product[key].image} />
                                                    </div>
                                                    <div className="name">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Name
                                                                    </td>
                                                                    <td>
                                                                        <TextField
                                                                            className="product-name"
                                                                            name={`product-${key}-name`}
                                                                            type="text"
                                                                            display="fullwidth"
                                                                            value={product[key].name}
                                                                            onChange={e => console.log(e)}
                                                                            onBlur={e => e.console.log(e)}
                                                                            noValidation
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="price">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Price
                                                                    </td>
                                                                    <td>
                                                                        <TextField
                                                                            className="product-price"
                                                                            name={`product-${key}-price`}
                                                                            type="number"
                                                                            display="fullwidth"
                                                                            value={product[key].price}
                                                                            onChange={e => console.log(e)}
                                                                            onBlur={e => e.console.log(e)}
                                                                            noValidation
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="step">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Step
                                                                    </td>
                                                                    <td>
                                                                        <TextField
                                                                            className="product-step"
                                                                            name={`product-${key}-step`}
                                                                            type="number"
                                                                            display="fullwidth"
                                                                            value={product[key].price}
                                                                            onChange={e => console.log(e)}
                                                                            onBlur={e => e.console.log(e)}
                                                                            noValidation
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="unit">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Unit
                                                                    </td>
                                                                    <td>
                                                                    <TextField
                                                                        className="product-unit"
                                                                        name={`product-${key}-unit`}
                                                                        type="text"
                                                                        display="fullwidth"
                                                                        value={product[key].unit}
                                                                        onChange={e => console.log(e)}
                                                                        onBlur={e => e.console.log(e)}
                                                                        noValidation
                                                                    />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="button">
                                                        <Button
                                                            display="content"
                                                            action={(e) => console.log(e)}
                                                            text="Update"
                                                        />
                                                    </div>
                                                </div>
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