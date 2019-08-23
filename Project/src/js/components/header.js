import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef()
    }
    getSearchResult = () => {
        const searchString = new XMLHttpRequest();
        searchString.open("GET", `http://localhost:3001/catalog?manufacturer=${this.searchInput.current.value}`, false);
        searchString.send();
        console.log(searchString.responseText);
        this.props.searchResult(JSON.parse(searchString.responseText));
    }
    render() {
        return <header className="header">
            <div className='header__inner'>
                <div className='container'>
                    <div className="header__top">
                        <div className="row">
                            <div className='col-md-2'>
                                <img className='logo' src='' />
                            </div>

                            <div className="col-md-5">
                                <div className="search">
                                    <input className="search__field" placeholder='Search' ref={this.searchInput} />
                                    <Link to='/result' className='search__btn btn-primary' onClick={this.getSearchResult}>Search</Link>
                                </div>

                            </div>
                            <div className="col-md-5">
                                <button className='adaptiveMenuBtn'>
                                    <span className="adaptiveMenuBtn__ico"></span>
                                </button>
                                <div className='navList'>
                                    <Link to='/admin' className='navList__link'>Admin</Link>
                                    <Link to="/" className='navList__link'>Home</Link>
                                    <Link to="/catalog" className='navList__link'>Catalog</Link>
                                    <Link to='/basket' className="navList__link">basket</Link>
                                    <Link to='/login' className='navList__link'>Log In</Link>
                                    <Link to='/signup' className="navList__link">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </header>
    }
}