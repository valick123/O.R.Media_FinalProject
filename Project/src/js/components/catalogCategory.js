import React from 'react';
import { ProductCard } from './productCard';
import { Route, Link } from 'react-router-dom';
import { ProductPage } from './productPage';
import { CatalogForm } from './catalogForm';
export class CatalogCategory extends React.Component {

    componentDidMount() {

        const items = new XMLHttpRequest();
        items.open('GET', `http://localhost:3001/catalog?category=${this.props.match.params.category}`, false);
        items.send();
        const settings = new XMLHttpRequest();

        settings.open('GET', `http://localhost:3001/settings?category=${this.props.match.params.category}`, false);
        settings.send();

        this.props.getItems(JSON.parse(items.responseText), JSON.parse(settings.responseText)[0])
    }
    productListActions = (e) => {
        let target = e.target;
        if (target.classList.contains('addBtn')) {
            this.props.catalogItems.forEach((item) => {
                if (item.id == target.dataset.id) {
                    this.props.addToBasket(item)
                }
            })
        }
        if (target.classList.contains("moreBtn")) {
            this.props.catalogItems.forEach((item) => {
                if (item.id == target.dataset.id) {
                    this.props.setProductPageInfo(item)
                }
            })
        }

    }

    renderProductList = () => {
        const productList = this.props.catalogItems.map((item) => {
            return <ProductCard info={item} key={item.id} />
        })
        return productList
    }
    render() {


        return (<React.Fragment>
            {this.props.catalogItems.length != 0 ? this.props.location.pathname === `/catalog/${this.props.match.params.category}` ? <main className='catalog main'>
                <div className="catalog__inner">
                    <div className='container'>
                        <h1 className='blockTitle'>{this.props.match.params.category} </h1>
                        <div className='row'>
                            <div className='col-md-3'>
                                {this.props.formSettings.fieldSet ? <CatalogForm formSettings={this.props.formSettings} getItems={this.props.getItems} /> : null}
                            </div>
                            <div className='col-md-9'>
                                <div className="productList" onClick={this.productListActions}>
                                    {this.renderProductList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> : null : <div className='catalog__inner'><div className='container'><h1>Empty category</h1></div></div>}
            <Route path={`/catalog/:category/:item`} render={(props) => <ProductPage {...props} getItems={this.props.getItems} catalogItems={this.props.catalogItems} addToBasket={this.props.addToBasket} setProductPageInfo={this.props.setProductPageInfo} selectedProduct={this.props.selectedProduct} />} />
        </React.Fragment>
        )
    }
}