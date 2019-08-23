import React from 'react';
import ReactDOM from 'react-dom';

export class ModalWindow extends React.Component {
    componentWillMount() {
        this.root = document.createElement('div');
        this.root.className = 'modalWindow';
        document.body.appendChild(this.root);
    }
    componentWillUnmount() {
        document.body.removeChild(this.root);
    }
    render() {
        return (
            ReactDOM.createPortal(
                <div className='modalWindow__inner'>
                    <button className='modalWindow__close-btn' onClick={this.props.onClose}>Close</button>
                    <div className='modalWindow__content'>
                        {this.props.children}

                    </div>

                </div>, this.root)
        )
    }
}