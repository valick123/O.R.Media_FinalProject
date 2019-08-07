import React from 'react';
import { ProductCard } from './productCard';
export class SearchRusults extends React.Component {
    renderReultList = () => {
        const resultList = this.props.searchResults.map((item) => {
            return <ProductCard info={item} key={item.id} />
        })
        return resultList
    }
    addTobasketList = (e) => {
        let target = e.target;
        if (target.classList.contains('addBtn')) {
            this.props.searchResults.forEach((item) => {
                if (item.id == target.dataset.id) {
                    this.props.addToBasket(item)
                }
            })
        }
    }
    render() {
        return <main className='main searchresult'>
            <div className="container">
                <h1>result</h1>
                <div className='resultList' onClick={this.addTobasketList}>
                    {this.props.searchResults.length ? this.renderReultList() : <h1>Nothing was found</h1>}
                </div>

            </div>
        </main>
    }
}