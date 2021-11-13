import React from 'react'
import { Link } from 'react-router-dom'
import { SiAppannie, SiEvernote, SiTekton } from "react-icons/si";
import Button from '../button/Button'
import './Pricing.css'

const Pricing = () => {
    return (
        <div>
            <div className="pricing-section">
                <div className="pricing-wrapper">
                    <h2 className="price-header">Pricing</h2>
                    <div className="pricing-container">
                        <Link to='sign-up'>
                            <div className="pricing-container-card pricing-container-card-1">
                                <div className="c-icon-holder">
                                    <SiTekton className="c-icon"/>
                                </div>
                                <div className="c-info">
                                    <h2>Steel</h2>
                                    <h1>$5.99</h1>
                                    <p>per month</p>
                                </div>
                                <div className="c-description">
                                    <h3>100 Transactions</h3>
                                    <h3>2% Cash Back</h3>
                                    <h3>$10000 Limit</h3>
                                </div>
                                <Button>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='sign-up'>
                            <div className="pricing-container-card pricing-container-card-2">
                                <div className="c-icon-holder">
                                    <SiEvernote className="c-icon"/>
                                </div>
                                <div className="c-info">
                                    <h2>Gold</h2>
                                    <h1>$5.99</h1>
                                    <p>per month</p>
                                </div>
                                <div className="c-description">
                                    <h3>100 Transactions</h3>
                                    <h3>2% Cash Back</h3>
                                    <h3>$10000 Limit</h3>
                                </div>
                                <Button buttonColor='red'>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='sign-up'>
                            <div className="pricing-container-card pricing-container-card-3">
                                <div className="c-icon-holder">
                                    <SiAppannie  className="c-icon"/>
                                </div>
                                <div className="c-info">
                                    <h2>Platinum</h2>
                                    <h1>$5.99</h1>
                                    <p>per month</p>
                                </div>
                                <div className="c-description">
                                    <h3>100 Transactions</h3>
                                    <h3>2% Cash Back</h3>
                                    <h3>$10000 Limit</h3>
                                </div>
                                <Button>Choose Plan</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
