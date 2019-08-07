import React from 'react';
import { Link } from "react-router-dom"
export class BasketProductCard extends React.Component {
    render() {
        return (
            <div className='basketProductCard'>
                <div className='basketProductCard__inner'>
                    <div className='basketProductCard__ico'>{this.props.info.imgURL}</div>
                    <div className='basketProductCard__info'>{this.props.info.description}</div>
                    <div className='basketProductCard__price'>{this.props.info.price}</div>
                    <div className='basketProductCard__controls'>
                        <Link to={`/catalog/${this.props.info.category}/${this.props.info.model}`} className='basketProductCard__btn btn' >More</Link>
                        <button className='productCard__btn btn deleteBtn' id={this.props.info.id} data-basket-id={this.props.basketId}>Delete</button>
                    </div>

                </div>
            </div>
        )
    }
}