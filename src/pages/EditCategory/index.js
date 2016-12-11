import React, { Component } from 'react';
import base from '../../services/base';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { save, update, clear } from '../../services/form';
import Image from '../../components/Image';

export default class EditCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    /**
     * Lifecycle.
     */

    componentDidMount() {
        base.fetch("categories/", {
            context: this,
            asArray: false,
            then(data) {
                if (data) {
                    this.setState({ categories: data });
                    save("categories", data);
                }
            }
        });
    }

    /**
     * End of Lifecycle.
     */

    /**
     * Methods
     */

    add() {

    }

    /**
     * End of Methods
     */

    render() {

        const onSubmit = (e,key) => {
            e.preventDefault();

            let name = document.getElementsByName(`category-${key}-name`)[0].value;
            console.log(name);
            base.update(`categories/`,{
                data: {[`${key}`] : name},
                then(err) {
                    if (!err) {
                        console.log("Update completed");
                        alert("Update Completed.");
                    }
                }
            });
        };
        const onChange = (field, value) => {};
        const categories = this.state.categories;

        return (
            <div className="l-fullwidth">
                <div className="l-wrapper-MainNav">
                    <MainNav />
                </div>
                <Header heading={`Category`} />
                <main className="l-main">
                    {
                        !categories ? (<div className="content">Loading ...</div>) :
                            (
                                <div className="content">
                                    {Object.keys(categories).map(function (key) {
                                        return (
                                            <div className="content-entry" key={key}>
                                                <Form
                                                    name={`form-category`}
                                                    title={`Category`}
                                                    icon={<i className="fa fa-lg fa-address-card" aria-hidden="true"></i>}
                                                    footer={
                                                        <Button
                                                            className="update-button"
                                                            type="submit"
                                                            display="content"
                                                            action={(e) => onSubmit(e, key)}
                                                            icon="times"
                                                            text="Update Kategori"
                                                            isSecondary
                                                            />
                                                    }
                                                    >
                                                    <TextField
                                                        name={`category-${key}-name`}
                                                        type="text"
                                                        label={`${key}`}
                                                        value={categories[key]}
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
        );
    }
}