import React from 'react';
export class CatalogForm extends React.Component {
    sendSearchRequest = () => {

        let form = document.querySelector('.catalog__form');

        let searchParamsString = '?';
        [].forEach.call(form.children, (item) => {

            if (item.nodeName == "INPUT" || item.nodeName == 'SELECT') {

                if (item.value) {
                    searchParamsString += `&${item.name}=${item.value}`
                }

            }
        })
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:3001/catalog${searchParamsString}`, false);
        xhr.send();
        this.props.getItems(JSON.parse(xhr.responseText), this.props.formSettings)
        console.log(searchParamsString, '\n', JSON.parse(xhr.responseText))
    }
    renderFormFields = () => {
        const form = this.props.formSettings.fieldSet.map((item, index) => {
            return <React.Fragment key={index}>
                <label htmlFor={item.fieldName} className='catalog__form__label'>{item.fieldName}:</label>
                {React.createElement(item.fieldType, {
                    id: item.fieldName,
                    name: item.fieldName,
                    className: 'catalog__form__field'
                }, item.fieldType == 'select' ? item.value.map((elem, index) => {
                    return <option key={index} value={elem}>{elem}</option>
                }) : null)}
            </React.Fragment>
        })
        console.log(this.props.formSettings.fieldSet)
        return form
    }
    render() {
        return (
            <div className='catalog__form form' >
                {this.renderFormFields()}
                <button onClick={this.sendSearchRequest}>Search</button>
            </div>
        )
    }
}