import React from 'react';
export class NewProductForm extends React.Component {
    addNewProduct = () => {
        const form = document.querySelector('.newProduct__form');
        let newProduct = {};
        [].forEach.call(form.children, (item) => {
            if (item.nodeName == 'INPUT' || item.nodeName == 'SELECT') {
                newProduct[item.name] = item.value
            }
        })
        newProduct.id = this.props.productList[this.props.productList.length - 1].id + 1;
        this.props.addToCatalog(newProduct);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `http://localhost:3001/catalog`, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newProduct));
        console.log(newProduct)
    }

    renderFormFields = () => {
        const form = this.props.formSettings.fieldSet.map((item, index) => {
            return <React.Fragment key={index}>
                <label htmlFor={item.fieldName} className='form__label'>{item.fieldName}:</label>
                {React.createElement(item.fieldType, {
                    id: item.fieldName,
                    name: item.fieldName,
                    className: 'form__field'
                }, item.fieldType == 'select' ? item.value.map((elem, index) => {
                    return <option key={index} value={elem}>{elem}</option>
                }) : null)}
            </React.Fragment>
        })
        return form

    }
    render() {
        return (
            <div className='newProduct__form form' >

                {this.renderFormFields()}
                <button className='btn btn-primary' onClick={this.addNewProduct}>Add</button>
            </div>
        )
    }
}