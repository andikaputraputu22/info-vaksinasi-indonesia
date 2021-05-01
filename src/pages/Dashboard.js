import React, {Component} from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import {gsap} from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Post from '../components/Post/Post';
import Footer from '../components/Footer/Footer';

class Dashboard extends Component {
    state = {
        total_sasaran: "----",
        vaksinasi_date: "",
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
        AOS.init({
            once: true
        });
        gsap.registerPlugin(TextPlugin);
        gsap.to('.hastag', {delay: 1.5, duration: 2, text: '#AYOVAKSINASI'});
        gsap.to('.title-page', {delay: 3.5, duration: 5, text: 'Progress Vaksinasi COVID-19 Indonesia'});
        // gsap.from('.title-page', {duration: 1, y: -100, opacity: 0, ease: 'bounce'});
        axios.get('https://cekdiri.id/vaksinasi/')
        .then((response) => {
            var count = response.data.monitoring.length;
            let data = response.data.monitoring[count - 1];
            gsap.to('.info-date-vaksin', {delay: 7.5, duration: 4, text: 'Update terakhir: ' + this.formattingDate(data.date)});
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
            // console.log(data);
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
                <div id="content" className="mtop-20">
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