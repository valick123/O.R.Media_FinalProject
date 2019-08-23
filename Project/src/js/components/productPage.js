import React from 'react';
export class ProductPage extends React.Component {
    addTobasketList = (e) => {
        let target = e.target;
        if (target.classList.contains('addBtn')) {
            this.props.catalogItems.forEach((item) => {
                if (item.id == target.dataset.id) {
                    this.props.addToBasket(item)
                }
            })
        }
    }
    componentDidMount() {
        if (Object.keys(this.props.selectedProduct).length) {
            return false
        } else {
            setTimeout(() => {
                const item = new XMLHttpRequest();
                item.open('GET', `http://localhost:3001/catalog?category=${this.props.match.params.category}&model=${this.props.match.params.item}`, false);
                item.send();
                this.props.setProductPageInfo(JSON.parse(item.responseText)[0])

            }, 0)
        }


    }

    renderProductInfo() {

        return <React.Fragment key={this.props.selectedProduct.id} >
            <div className='productCard__ico'>{this.props.selectedProduct.imgURL}</div>
            <div className='productCard__info'>{this.props.selectedProduct.description}</div>
            <div className='productCard__price'>{this.props.selectedProduct.price}</div>
            <div className='productCard__controls'>
                <button className='productCard__btn btn addBtn btn-success' data-id={this.props.selectedProduct.id}>Add to basket</button>
            </div>
        </React.Fragment>

    }
    render() {
        return <React.Fragment>
            <main className="main productPage">
                <div className="productPage__inner">
                    <div className='container'>

                        <div className='productPage__info' onClick={this.addTobasketList}>
                            {this.renderProductInfo()}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    }
}