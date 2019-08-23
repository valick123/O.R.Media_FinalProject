import React from 'react';
import { Link, Route } from 'react-router-dom'
import { EditCatalog } from './editCatalog';
export class AdminPage extends React.Component {

    render() {
        return <React.Fragment>
            {this.props.location.pathname === '/admin' ? <main className="main adminPage">
                <div className='main__inner'>
                    <div className='container'>

                        <Link to='/admin/editcatalog'>Edit Catalog</Link>
                    </div>
                </div>
            </main> : null}
            <Route path='/admin/editcatalog' render={(props) => <EditCatalog {...props} adminInfo={this.props.adminInfo} getProductList={this.props.getProductList} addToCatalog={this.props.addToCatalog} deleteProduct={this.props.deleteProduct} editProduct={this.props.editProduct} />} />
        </React.Fragment>
    }
}