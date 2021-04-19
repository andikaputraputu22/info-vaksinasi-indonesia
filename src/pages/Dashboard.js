import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import Post from '../components/Post/Post';
import Footer from '../components/Footer/Footer';

class Dashboard extends Component {
    state = {
        total_sasaran: "----",
        vaksinasi_date: "----",
        total_vaksin_t1: "----",
        total_vaksin_t2: "----",
        percent_vaksin1: "",
        percent_vaksin2: "",
        total_sasaran_lansia: "----",
        total_vaksin_lansia_t1: "----",
        total_vaksin_lansia_t2: "----",
        percent_lansia_vaksin1: "",
        percent_lansia_vaksin2: "",
        total_sasaran_petugas: "----",
        total_vaksin_petugas_t1: "----",
        total_vaksin_petugas_t2: "----",
        percent_petugas_vaksin1: "",
        percent_petugas_vaksin2: "",
        total_sasaran_kesehatan: "----",
        total_vaksin_kesehatan_t1: "----",
        total_vaksin_kesehatan_t2: "----",
        percent_kesehatan_vaksin1: "",
        percent_kesehatan_vaksin2: "",
        info_vaksin_semua_t1: "------",
        info_vaksin_semua_t2: "------",
        info_vaksin_lansia_t1: "------",
        info_vaksin_lansia_t2: "------",
        info_vaksin_petugas_t1: "------",
        info_vaksin_petugas_t2: "------",
        info_vaksin_sdmk_t1: "------",
        info_vaksin_sdmk_t2: "------",
        cakupan: {}
    }
    
    componentDidMount() {
        axios.get('https://cekdiri.id/vaksinasi/')
        .then((response) => {
            var count = response.data.monitoring.length;
            let data = response.data.monitoring[count - 1]
            this.setState({
                total_sasaran: this.formattingNumber(data.total_sasaran_vaksinasi),
                vaksinasi_date: this.formattingDate(data.date),
                total_vaksin_t1: this.formattingNumber(data.vaksinasi1),
                total_vaksin_t2: this.formattingNumber(data.vaksinasi2),
                percent_vaksin1: this.removePercent(data.cakupan.vaksinasi1),
                percent_vaksin2: this.removePercent(data.cakupan.vaksinasi2),
                total_sasaran_lansia: this.formattingNumber(data.sasaran_vaksinasi_lansia),
                total_vaksin_lansia_t1: this.formattingNumber(data.tahapan_vaksinasi.lansia.total_vaksinasi1),
                total_vaksin_lansia_t2: this.formattingNumber(data.tahapan_vaksinasi.lansia.total_vaksinasi2),
                percent_lansia_vaksin1: this.removePercent(data.cakupan.lansia_vaksinasi1),
                percent_lansia_vaksin2: this.removePercent(data.cakupan.lansia_vaksinasi2),
                total_sasaran_petugas: this.formattingNumber(data.sasaran_vaksinasi_petugas_publik),
                total_vaksin_petugas_t1: this.formattingNumber(data.tahapan_vaksinasi.petugas_publik.total_vaksinasi1),
                total_vaksin_petugas_t2: this.formattingNumber(data.tahapan_vaksinasi.petugas_publik.total_vaksinasi2),
                percent_petugas_vaksin1: this.removePercent(data.cakupan.petugas_publik_vaksinasi1),
                percent_petugas_vaksin2: this.removePercent(data.cakupan.petugas_publik_vaksinasi2),
                total_sasaran_kesehatan: this.formattingNumber(data.sasaran_vaksinasi_sdmk),
                total_vaksin_kesehatan_t1: this.formattingNumber(data.tahapan_vaksinasi.sdm_kesehatan.total_vaksinasi1),
                total_vaksin_kesehatan_t2: this.formattingNumber(data.tahapan_vaksinasi.sdm_kesehatan.total_vaksinasi2),
                percent_kesehatan_vaksin1: this.removePercent(data.cakupan.sdm_kesehatan_vaksinasi1),
                percent_kesehatan_vaksin2: this.removePercent(data.cakupan.sdm_kesehatan_vaksinasi2),
                info_vaksin_semua_t1: data.cakupan.vaksinasi1 + " dari " + this.formattingNumber(data.total_sasaran_vaksinasi) + " telah divaksin",
                info_vaksin_semua_t2: data.cakupan.vaksinasi2 + " dari " + this.formattingNumber(data.total_sasaran_vaksinasi) + " telah divaksin",
                info_vaksin_lansia_t1: data.cakupan.lansia_vaksinasi1 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_lansia) + " telah divaksin",
                info_vaksin_lansia_t2: data.cakupan.lansia_vaksinasi2 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_lansia) + " telah divaksin",
                info_vaksin_petugas_t1: data.cakupan.petugas_publik_vaksinasi1 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_petugas_publik) + " telah divaksin",
                info_vaksin_petugas_t2: data.cakupan.petugas_publik_vaksinasi2 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_petugas_publik) + " telah divaksin",
                info_vaksin_sdmk_t1: data.cakupan.sdm_kesehatan_vaksinasi1 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_sdmk) + " telah divaksin",
                info_vaksin_sdmk_t2: data.cakupan.sdm_kesehatan_vaksinasi2 + " dari " + this.formattingNumber(data.sasaran_vaksinasi_sdmk) + " telah divaksin",
                cakupan: data.cakupan
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

    removePercent = (value) => {
        return value.replace('%', '');
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
                    <Post
                        total_sasaran={this.state.total_sasaran}
                        total_vaksin_t1={this.state.total_vaksin_t1}
                        total_vaksin_t2={this.state.total_vaksin_t2}
                        percent_vaksin1={this.state.percent_vaksin1}
                        percent_vaksin2={this.state.percent_vaksin2}
                        total_sasaran_lansia={this.state.total_sasaran_lansia}
                        total_vaksin_lansia_t1={this.state.total_vaksin_lansia_t1}
                        total_vaksin_lansia_t2={this.state.total_vaksin_lansia_t2}
                        percent_lansia_vaksin1={this.state.percent_lansia_vaksin1}
                        percent_lansia_vaksin2={this.state.percent_lansia_vaksin2}
                        total_sasaran_petugas={this.state.total_sasaran_petugas}
                        total_vaksin_petugas_t1={this.state.total_vaksin_petugas_t1}
                        total_vaksin_petugas_t2={this.state.total_vaksin_petugas_t2}
                        percent_petugas_vaksin1={this.state.percent_petugas_vaksin1}
                        percent_petugas_vaksin2={this.state.percent_petugas_vaksin2}
                        total_sasaran_kesehatan={this.state.total_sasaran_kesehatan}
                        total_vaksin_kesehatan_t1={this.state.total_vaksin_kesehatan_t1}
                        total_vaksin_kesehatan_t2={this.state.total_vaksin_kesehatan_t2}
                        percent_kesehatan_vaksin1={this.state.percent_kesehatan_vaksin1}
                        percent_kesehatan_vaksin2={this.state.percent_kesehatan_vaksin2}
                        info_vaksin_semua_t1={this.state.info_vaksin_semua_t1}
                        info_vaksin_semua_t2={this.state.info_vaksin_semua_t2}
                        info_vaksin_lansia_t1={this.state.info_vaksin_lansia_t1}
                        info_vaksin_lansia_t2={this.state.info_vaksin_lansia_t2}
                        info_vaksin_petugas_t1={this.state.info_vaksin_petugas_t1}
                        info_vaksin_petugas_t2={this.state.info_vaksin_petugas_t2}
                        info_vaksin_sdmk_t1={this.state.info_vaksin_sdmk_t1}
                        info_vaksin_sdmk_t2={this.state.info_vaksin_sdmk_t2}
                        cakupan={this.state.cakupan} />
                    <Footer />
                </div>
            </Container>
        )
    }
}

export default Dashboard;