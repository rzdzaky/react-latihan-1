import React from "react";
import './TopWrapper.css'

const TopWrapper = () => {
    return (
        <div class="top-wrapper">
            <div class="container">
                <h1>BELAJAR CODING.</h1>
                <h1>BELAJAR MENJADI LEBIH KREATIF.</h1>
                <p>Code With RZDZAKY adalah platform online untuk belajar coding.</p>
                <p>Kami menawarkan lingkungan pemograman yang lengkap untuk mempermudah Anda memulai.</p>
                <div class="btn-wrapper">
                    <a href="#" class="btn signup">Daftar dengan Email</a>
                    <p>atau</p>
                    <a href="#" class="btn facebook"><span class="fa fa-facebook"></span>Daftar dengan Facebook</a>
                    <a href="#" class="btn twitter"><span class="fa fa-twitter"></span>Daftar dengan Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default TopWrapper;