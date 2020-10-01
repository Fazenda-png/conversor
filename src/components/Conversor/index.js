import React, { Component } from 'react';
import { Title, Result } from "./styles"

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this)

    }

    converter() {

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=b2247fc5ca8ab83d31ba`
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para];
                let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2)
                this.setState({ moedaB_valor })

                console.log(cotacao)
            })
    }

    render() {
        return (
            <div className="conversor">

                <Title>{this.props.moedaA} para {this.props.moedaB}</Title>

                <input type="type" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }} ></input>
                <input type="button" value="Converter" onClick={this.converter}></input>

                <Result>{this.state.moedaB_valor}</Result>

            </div>
        );
    }
}
