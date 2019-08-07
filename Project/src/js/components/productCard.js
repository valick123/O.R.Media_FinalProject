import React from 'react';
import { Link } from "react-router-dom"
export class ProductCard extends React.Component {
    render() {
        return (
            <div className='productCard'>
                <div className='productCard__inner'>
                    <div className='productCard__ico'>{this.props.info.imgURL}</div>
                    <div className='productCard__info'>{this.props.info.description}</div>
                    <div className='productCard__price'>{this.props.info.price}</div>
                    <div className='productCard__controls'>
                        <Link to={`/catalog/${this.props.info.category}/${this.props.info.model}`} className='productCard__btn btn moreBtn' data-id={this.props.info.id}>More</Link>
                        <button className='productCard__btn btn addBtn' data-id={this.props.info.id}>Add to basket</button>
                    </div>

                </div>
            </div>
        )
    }
}