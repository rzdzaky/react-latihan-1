import React from "react";
import './LessonWrapper.css'

const LessonWrapper = () => {
    return (
        <div class="lesson-wrapper">
            <div class="container">
                <div class="heading">
                <h2>Cari tau dari mana anda mau memulai!</h2>
                </div>
                <div class="lessons">
                <div class="lesson">
                    <div class="lesson-icon">
                    <img src="https://prog-8.com/images/html/advanced/html.png"></img>
                    <p>HTML & CSS</p>
                    </div>
                    <p class="text-contents">Bahasa yang digunakan untuk membuat dan mendesain tampilan situs web Anda. </p>
                </div>
                <div class="lesson">
                    <div class="lesson-icon">
                    <img src="https://prog-8.com/images/html/advanced/jQuery.png"></img>
                    <p>jQuery</p>
                    </div>
                    <p class="text-contents">Library JavaScript yang cepat, kaya akan fitur, dan mudah digunakan yang menangani animasi dan permintaan Ajax.</p>
                </div>
                <div class="lesson">
                    <div class="lesson-icon">
                    <img src="https://prog-8.com/images/html/advanced/ruby.png"></img>
                    <p>Ruby</p>
                    </div>
                    <p class="text-contents">Bahasa dinamis, serba guna yang sederhana dan produktif. Ruby sering digunakan untuk membuat aplikasi web yang responsive.</p>
                </div>
                <div class="lesson">
                    <div class="lesson-icon">
                    <img src="https://prog-8.com/images/html/advanced/php.png"></img>
                    <p>PHP</p>
                    </div>
                    <p class="text-contents">Bahasa skrip open source yang dapat disematkan ke dalam HTML, dan cocok untuk pengembangan web.</p>
                </div>
                <div class="clear"></div>
                </div>
            </div>
        </div>
    )
}

export default LessonWrapper;