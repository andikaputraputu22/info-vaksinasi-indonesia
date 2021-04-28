import React from 'react';
import {Row, Col, Progress} from 'reactstrap';

const Post = (props) => {
    return (
        <div>
            <hr className="mtop-40"/>
            <Row className="mtop-40">
                <Col lg="6" md="6" sm="12" xs="12">
                    <h5>Vaksinasi Tahap 1</h5>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Semua Vaksinasi</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_t1}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_vaksin1}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_semua_t1}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Lansia</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_lansia_t1}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_lansia_vaksin1}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_lansia_t1}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Petugas Publik</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_petugas_t1}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_petugas_vaksin1}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_petugas_t1}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Tenaga Kesehatan</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_kesehatan_t1}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_kesehatan_vaksin1}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_sdmk_t1}</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                    <h5 className="mtop-title-tahap">Vaksinasi Tahap 2</h5>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Semua Vaksinasi</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_t2}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_vaksin2}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_semua_t2}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Lansia</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_lansia_t2}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_lansia_vaksin2}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_lansia_t2}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Petugas Publik</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_petugas_t2}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_petugas_vaksin2}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_petugas_t2}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card" data-aos="fade-up">
                        <h6 className="custom-title">Vaksinasi Tenaga Kesehatan</h6>
                        <div>
                            <div className="custom-amount">{props.total_vaksin_kesehatan_t2}</div>
                            <small className="custom-subtitle override-top">Dosis telah diberikan</small>
                            <Progress className="custom-progress mtop-20 mbot-5" color="custom-color-progress" value={props.percent_kesehatan_vaksin2}></Progress>
                            <div className="text-right">
                                <span className="custom-percentace">{props.info_vaksin_sdmk_t2}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr className="mtop-40"/>
        </div>
    )
}

export default Post;