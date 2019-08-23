import { connect } from 'react-redux';
import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { NotFound } from '../components/notFound';
import { SignUp } from '../components/singUp';
import { Catalog } from '../components/catalog';
import { Basket } from '../components/basket';
import { LogIn } from '../components/logIn';
import { SearchRusults } from '../components/serchResultsPage';
import { AdminPage } from '../components/adminPage';

import { getItems } from '../actions/getCatalogItems';
import { createProductPage } from '../actions/createProductPage'
import { addProductToBasketList } from '../actions/addProductToBasketList'
import { deleteProductFromBasketList } from '../actions/deleteProductFromBasketList'
import { getSearchResult } from '../actions/getSearchReult'
import { getCatalogInfo } from '../actions/getCatalogSettings'
import { addProductToCatalog } from '../actions/addProductToCatalog';
import { deleteProductFromCatalog } from '../actions/deleteProductFromCatalog'
import { editProductInCatalog } from '../actions/editProductInCatalog'
class App extends React.Component {
    render() {
        const { catalogData, getItemsList, addToBasketList, deleteFromBasketList, productPageInfo, getSearchResult, adminData, getCatalogInfo, addProductToCatalog, deleteProductFromCatalog, editProductInCatalog } = this.props
        return <React.Fragment>
            <Header searchResult={getSearchResult} />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path='/catalog' render={(props) => <Catalog  {...props} catalog={catalogData} getItems={getItemsList} addToBasket={addToBasketList} setProductPageInfo={productPageInfo} />} />
                <Route path='/basket' render={(props) => <Basket {...props} basketList={catalogData.basketList} deleteFromBasket={deleteFromBasketList} />} />
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/result' render={(props) => <SearchRusults {...props} searchResults={catalogData.searchResult} addToBasket={addToBasketList} />} />
                <Route path='/admin' render={(props) => <AdminPage {...props} adminInfo={adminData} getProductList={getCatalogInfo} addToCatalog={addProductToCatalog} deleteProduct={deleteProductFromCatalog} editProduct={editProductInCatalog} />} />
                <Route component={NotFound} />
            </Switch>

            <Footer />
        </React.Fragment>


    }
}
const mapStateToProps = (store) => {
    return {
        catalogData: store.catalog,
        adminData: store.admin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getItemsList: (items, settings) => dispatch(getItems(items, settings)),
        addToBasketList: (product) => dispatch(addProductToBasketList(product)),
        deleteFromBasketList: (productId) => dispatch(deleteProductFromBasketList(productId)),
        productPageInfo: (product) => dispatch(createProductPage(product)),
        getSearchResult: (result) => dispatch(getSearchResult(result)),
        getCatalogInfo: (list, categories, settings) => dispatch(getCatalogInfo(list, categories, settings)),
        addProductToCatalog: (newProduct) => dispatch(addProductToCatalog(newProduct)),
        deleteProductFromCatalog: (productId) => dispatch(deleteProductFromCatalog(productId)),
        editProductInCatalog: (productId, newProductInfo) => dispatch(editProductInCatalog(productId, newProductInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)