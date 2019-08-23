import React from 'react';
export class SignUp extends React.Component {
    createNewUser = (e) => {
        e.preventDefault();
        let form = document.querySelector('.signUpForm');
        let formData = {

        };
        [].forEach.call(form.children, (item) => {

            if (item.nodeName == "INPUT" || item.nodeName == 'SELECT') {

                formData[item.name] = item.value;

            }
        })
        formData.isAdmin = false
        let xhr = new XMLHttpRequest();
        console.log(formData, JSON.stringify(formData))
        xhr.open("POST", 'http://localhost:3001/users', false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(formData));
        xhr.open('GET', 'http://localhost:3001/users', false);
        xhr.send()
        console.log(xhr.responseText)
    }
    render() {
        return <main className='signUp main'>
            <div className="signUp__inner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='signUpForm' >
                                <h1 className='signUpForm__title'>Sign Up</h1>
                                <input name='name' type='text' placeholder='Name' className='signUpForm__field' />
                                <input name='surname' type='text' placeholder='Surname' className='signUpForm__field' />
                                <input name='email' type='email' placeholder='Email' className='signUpForm__field' />
                                <input name='passwordFirst' type='password' placeholder='Password' className='signUpForm__field' />
                                <input name='passwordSecond' type='password' placeholder='Password Again' className='signUpForm__field' />
                                <select name='gender' className='signUpForm__field'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                                <input name='country' type='text' placeholder='Country' className='signUpForm__field' />
                                <input name='city' type='text' placeholder='City' className='signUpForm__field' />
                                <button className='signUpForm__btn btn btn-primary' onClick={this.createNewUser}>Sign Up</button>
                                <button className='signUpForm__btn btn btn-error' >Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    }
}