import React, { Component } from 'react';
import './form.scss'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { sucessSend: false, errorSend: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = event.target.elements;

        if (username.value === '' || password.value === '') {
            this.setState({ errorSend: true, sucessSend: false })
            return false;
        } else {
            this.setState({ errorSend: false, sucessSend: true });
            return true;
        }
    }

    render() {
        return (
            <div className="formulario-wrapper">
                <h1>Teste Unitário Formulário</h1>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div className="inputText">
                        <label htmlFor="username">Username
                        <input type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={this.username}
                            />
                        </label>
                    </div>
                    <div className="inputText">
                        <label htmlFor="password">Password
                        <input type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={this.password}
                            />
                        </label>
                    </div>
                    <input type="submit" value="submit" />
                    <p>
                        {this.state.sucessSend ?
                            <span className="success-text">Form enviado com sucesso</span>
                            : null}
                        {this.state.errorSend ?
                            <span className="error-text">Todos os campos são obrigatórios.</span>
                            : null}
                    </p>
                </form>
            </div>
        );
    }
}

export default Form;