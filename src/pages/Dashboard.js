import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import './Dashboard.css';

class Dashboard extends Component {
    state = {
        data_vaksinasi: {},
        total_sasaran: "",
        vaksinasi_date: ""
    }
    
    componentDidMount() {
        axios.get('https://cekdiri.id/vaksinasi/')
        .then((response) => {
            var count = response.data.monitoring.length;
            let data = response.data.monitoring[count - 1]
            let total_sasaran = this.formattingNumber(data.total_sasaran_vaksinasi)
            let vaksinasi_date = this.formattingDate(data.date)
            this.setState({
                data_vaksinasi: data,
                total_sasaran: total_sasaran,
                vaksinasi_date: vaksinasi_date
            })
            console.log(data);
        })
    }

    formattingNumber = (value) => {
        return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }

    formattingDate = (value) => {
        var date = moment(value, "YYYY-MM-DD").format("DD MMMM YYYY");
        return date;
    }

    render() {
        return (
            <Container>
                <div id="content" className="mtop-60">
                    <Row>
                        <Col lg="6" md="6" sm="12" xs="12">
                            <div>
                                <small>#AYOVAKSINASI</small>
                                <h2>Progress Vaksinasi COVID-19 Indonesia</h2>
                                <span id="info_date">{this.state.vaksinasi_date}</span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12" xs="12">
                            <div className="card">
                                <h5>Sasaran Vaksinasi:</h5>
                                <span className="custom-total">{this.state.total_sasaran}</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" md="6" sm="12" xs="12">

                        </Col>
                        <Col lg="6" md="6" sm="12" xs="12">
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Dashboard;