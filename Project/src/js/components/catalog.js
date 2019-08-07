import React from 'react';
import AdSlider from './slider'
import { Link, Route } from 'react-router-dom'
import { CatalogCategory } from './catalogCategory';
export class Catalog extends React.Component {


    render() {
        const { catalog } = this.props
        return <React.Fragment>
            {this.props.location.pathname == '/catalog' ? <main className='catalog main'>
                <div className="catalog__inner">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='adBaner'>
                                    <AdSlider />

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='catalog__catigories' onClick={this.setInfo} >
                                    <Link to='/catalog/phones' className='catalog__catigories__item' >Phones</Link>
                                    <Link to='/catalog/tablets' className='catalog__catigories__item' >Tablets</Link>
                                    <Link to='/catalog/laptops' className='catalog__catigories__item' >Laptops</Link>
                                    <Link to='/catalog/headPhones' className='catalog__catigories__item'>Headrhones</Link>
                                    <Link to='/catalog/cases' className='catalog__catigories__item'>Cases</Link>
                                    <Link to='/catalog/chargers' className='catalog__catigories__item'>charger</Link>
                                    <Link to='/catalog/cansoles' className='catalog__catigories__item' >Cansoles</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> : null}
            <Route path="/catalog/:category" render={(props) => <CatalogCategory {...props} catalogItems={catalog.catalogItems} formSettings={catalog.formSettings} getItems={this.props.getItems} addToBasket={this.props.addToBasket} setProductPageInfo={this.props.setProductPageInfo} selectedProduct={catalog.selectedProduct} />} />
        </React.Fragment>
    }
}