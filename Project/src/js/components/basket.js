import React from 'react';
import AdSlider from './slider'
import { ProductCard } from './productCard';
import { BasketProductCard } from './basketproductCard';
export class Basket extends React.Component {
    renderBasketList = () => {
        let basketList = this.props.basketList.map((item, index) => {
            return <BasketProductCard key={index} info={item} basketId={index} />
        })
        return basketList
    }
    deleteProduct = (e) => {
        let target = e.target;
        if (target.classList.contains('deleteBtn')) { this.props.deleteFromBasket(target.dataset.basketId) }
    }
    render() {
        return <main className='basket main'>

            <div className="basket__inner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='adBaner'>
                                <AdSlider />

                            </div>
                        </div>
                    </div>
                    <h1 className='blockTitle'>Basket</h1>
                    <div className='basketList productList' onClick={this.deleteProduct}>
                        {this.props.basketList.length ? this.renderBasketList() : <h1>basket is empty</h1>}
                    </div>

                </div>

            </div>
        </main>
    }
}