import React from 'react';
import { AdminProductCard } from './productCard(Admin)';
import { NewProductForm } from './newProductForm';
import { ModalWindow } from './modalWindow';
export class EditCatalog extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        isModalOpen: false,
        selectedProduct: null
    }
    modalToggle = () => {
        this.setState(state => ({
            isModalOpen: !this.state.isModalOpen
        }))
    }
    componentDidMount() {
        const products = new XMLHttpRequest();
        products.open("GET", `http://localhost:3001/catalog`, false);
        products.send();

        const categories = new XMLHttpRequest();
        categories.open("GET", `http://localhost:3001/catalogCategories`, false);
        categories.send();

        const formSettings = new XMLHttpRequest();
        formSettings.open('GET', `http://localhost:3001/settings?category=newProduct`, false);
        formSettings.send();

        this.props.getProductList(JSON.parse(products.responseText), JSON.parse(categories.responseText), JSON.parse(formSettings.responseText)[0]);
    }
    renderCatalogInfo = () => {
        const categoriesInfo = this.props.adminInfo.categoryList.map((category, index) => {
            let counter = 0
            this.props.adminInfo.productList.forEach((product) => {
                if (category == product.category) {
                    counter++;
                }
            })

            return <li className="adminInfo__item" key={index}>{category}: {counter} {counter > 1 ? "items" : "item"}</li>
        })


        return categoriesInfo
    }
    renderProductList = () => {
        const productList = this.props.adminInfo.productList.map((product, index) => {
            return <AdminProductCard key={product.id} info={product} index={product.id} modalWindow={this.modalToggle} />
        })
        return productList
    }
    renderContent = () => {
        this.content = []
        for (let key in this.state.selectedProduct) {

            let field = <React.Fragment key={key}>
                <label htmlFor={`${key}(modal)`} className='form__label'>{key}</label>

                {React.createElement(key == 'description' ? 'textarea' : 'input', { id: `${key}(modal)`, disabled: key == 'id' || key == 'category' ? true : false, placeholder: this.state.selectedProduct[key], className: 'form__field', name: key })}
            </React.Fragment>
            this.content.push(field)
        }
        return this.content
    }
    controlsActions = (e) => {
        let target = e.target;
        if (target.classList.contains('deleteBtn')) {
            this.props.deleteProduct(target.dataset.id);
            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', ` http://localhost:3001/catalog/${target.dataset.id}`, false);
            xhr.send();
        }
        if (target.classList.contains('editBtn')) {
            this.props.adminInfo.productList.forEach((product) => {
                if (product.id == target.dataset.id) {
                    this.setState({
                        selectedProduct: product
                    })
                }
            })
        }

    }
    changeProductInfo = () => {
        let newInfo = {}
        let form = document.querySelector('.editForm');
        [].forEach.call(form.children, (item) => {
            if (item.nodeName !== "LABEL") {
                if (item.value !== '') {
                    newInfo[item.name] = item.value;
                } else {
                    newInfo[item.name] = this.state.selectedProduct[item.name];
                }

            }
        })
        this.props.editProduct(newInfo.id, newInfo)
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", `http://localhost:3001/catalog/${this.state.selectedProduct.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newInfo));
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    render() {
        return <main className="main adminPage">
            < div className='main__inner' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2 className='blockTitle'>Catalog information:</h2>
                            <ul className='adminInfo'>
                                {this.renderCatalogInfo()}
                            </ul>
                            <div className='addNewProductForm'>
                                <h2 className='blockTitle'>Add new product:</h2>
                                {this.props.adminInfo.formSettings.fieldSet ? <NewProductForm formSettings={this.props.adminInfo.formSettings} productList={this.props.adminInfo.productList} addToCatalog={this.props.addToCatalog} /> : null}
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='productList' onClick={this.controlsActions}>
                                <h2 className='blockTitle'>Product List:</h2>
                                {this.renderProductList()}
                            </div>

                        </div>
                    </div>
                </div>
            </div >

            {
                this.state.isModalOpen &&

                <ModalWindow onClose={this.modalToggle} >
                    <div className='editForm form'>
                        {this.renderContent()}
                        <button className='btn btn-primary' onClick={this.changeProductInfo}>Save</button>
                    </div>

                </ModalWindow>

            }

        </main >
    }
}