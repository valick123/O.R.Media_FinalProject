import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { FogotPassword } from './fogotPassword';
export class LogIn extends React.Component {
    render() {
        return <React.Fragment>
            {this.props.location.pathname == '/login' ? <main className='logIn main'>
                <div className="logIn__inner">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='logInForm'>
                                    <h1 className='logInForm__title'>Log In</h1>
                                    <input name='userName' type='text' placeholder='User Name' className='logInForm__field' />
                                    <input name='userName' type='password' placeholder='Password' className='logInForm__field' />
                                    <Link to='/login/fogotpassword' className='logInForm__link'>Fogot passsword?</Link>
                                    <button className='logInForm__btn'>Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main> : null}
            <Switch>
                <Route path='/login/:pageName' component={FogotPassword} />
            </Switch>
        </React.Fragment>

    }
}