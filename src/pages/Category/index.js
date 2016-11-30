import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

import base from '../../services/base';
import './category.css';

export default class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: {}
        };
    }

    // Lifecycle

    componentDidMount() {

        // Fetch category based on id. Not sure about the id.
        base.fetch("categories", {
            context: this,
            asArray: false,
            then(data) {
                if (data) {
                    this.setState({ category: data });
                }
            }
        });
    }

    // End of Lifecycle

    render() {
        const onChange = function(e) {
            console.log(e);
        }

        if (this.state.category) {
            const category = this.state.category;
            return (
                <div>
                    <Header heading="Category" />
                    <div className="main-content">
                        <div className="content">
                        { 
                            Object.keys(category).map(function(key){
                                const item = category[key];
                                return (
                                    <div className="container">     
                                        <div className="key" key={key}>{key}</div>
                                        <div className="value">
                                            <div className="left">
                                                <TextField
                                                    name="value"
                                                    label=""
                                                    placeholder=""
                                                    value={item}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="right">
                                                <Button
                                                    className="Pesanan-heading-action"
                                                    display="content"
                                                    action={(e) => console.log(e)}
                                                    icon="arrow-left"
                                                    text="Update"
                                                    isSecondary
                                                    isSmall
                                                />
                                            </div>
                                        </div>
                                    </div>        
                                )
                            })
                        }
                        </div>
                        <div className="foot"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Header heading="Category" />
                </div>
            );
        }
    }
}

