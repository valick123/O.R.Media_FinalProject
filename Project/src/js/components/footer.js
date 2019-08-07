import React from 'react';
export class Footer extends React.Component {
    render() {
        return <footer className='footer'>
            <div className='footer__inner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <ul className='usefullInfo'>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>
                                <li className='usefullInfo__item'>
                                    <a href='#' className='usefullInfo__item__link'>SOME_TEXT</a>
                                </li>

                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <ul className='socialLinks'>

                                <li className='socialLinks__item'>
                                    <a href='#' className='socialLinks__item__link'>first link</a>
                                </li>
                                <li className='socialLinks__item'>
                                    <a href='#' className='socialLinks__item__link'>second link</a></li>
                                <li className='socialLinks__item'>
                                    <a href='#' className='socialLinks__item__link'>third link</a>
                                </li>
                                <li className='socialLinks__item'>
                                    <a href='#' className='socialLinks__item__link'>fourth link</a>
                                </li>
                                <li className='socialLinks__item'>
                                    <a href='#' className='socialLinks__item__link'>fifth link</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    }
}