import React from 'react';
import { AdminProductCard } from './productCard(Admin)';
import { NewProductForm } from './newProductForm';
export class EditCatalog extends React.Component {
    componentDidMount() {
        const products = new XMLHttpRequest();
        products.open("GET", `http://localhost:3001/catalog`, false);
        products.send();

        const categories = new XMLHttpRequest();
        categories.open("GET", `http://localhost:3001/catalogCategories`, false);
        categories.send();

        const formSettings = new XMLHttpRequest();
        formSettings.open('GET', `http://localhost:3001/settings/7`, false);
        formSettings.send();

        this.props.getProductList(JSON.parse(products.responseText), JSON.parse(categories.responseText), JSON.parse(formSettings.responseText));
    }
    renderCatalogInfo = () => {
        const categoriesInfo = this.props.adminInfo.categoryList.map((category, index) => {
            let counter = 0
            this.props.adminInfo.productList.forEach((product) => {
                if (category == product.category) {
                    counter++;
                }
            })

            return <li className="catalogInfo__item" key={index}>{category}: {counter} {counter > 1 ? "items" : "item"}</li>
        })


        return categoriesInfo
    }
    renderProductList = () => {
        const productList = this.props.adminInfo.productList.map((product, index) => {
            return <AdminProductCard key={product.id} info={product} index={product.id} />
        })
        return productList
    }
    deleteProduct = (e) => {
        let target = e.target;
        if (target.classList.contains('deleteBtn')) {
            console.log(target.dataset.id);
            this.props.deleteProduct(target.dataset.id);
        }
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', ` http://localhost:3001/catalog/${target.dataset.id}`, false);
        xhr.send();
    }
    render() {
        return <main className="main adminPage">
            <div className='main__inner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>Catalog information:</h2>
                            <ul className='catalogInfo'>
                                {this.renderCatalogInfo()}
                            </ul>
                            <div className='addNewProductForm'>
                                <h2>Add new product:</h2>
                                {this.props.adminInfo.formSettings.fieldSet ? <NewProductForm formSettings={this.props.adminInfo.formSettings} productList={this.props.adminInfo.productList} addToCatalog={this.props.addToCatalog} /> : null}
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='productList' onClick={this.deleteProduct}>
                                <h2>Product List:</h2>
                                {this.renderProductList()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    }
}