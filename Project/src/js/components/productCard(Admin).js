import React from 'react';
import { Link } from "react-router-dom"
export class AdminProductCard extends React.Component {
    render() {
        return (
            <div className='productCard'>
                <div className='productCard__inner'>
                    <div className='productCard__ico'>{this.props.info.imgURL}</div>
                    <div className='productCard__info'>{this.props.info.description}</div>
                    <div className='productCard__price'>{this.props.info.price}</div>
                    <div className='productCard__controls'>
                        <button className='productCard__btn btn editBtn' data-id={this.props.index}>Edit</button>
                        <button className='productCard__btn btn deleteBtn' data-id={this.props.index}>Delete</button>
                    </div>

                </div>
            </div>
        )
    }
}