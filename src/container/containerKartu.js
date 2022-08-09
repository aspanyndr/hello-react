import React from "react";

export class KartuNama extends React.Component {
    render() {
        return (
            <body>
                <div class="body-kartu-nama">
                    <div class="pojok_atas"><span><img src="https://prosigmaka.com/wp-content/uploads/2022/03/prosigmaka-Logo.png" /></span></div><br></br>    
                    <div>
                        <span id="nama">Muhammad Aspan Yunandar</span><br></br>
                        <span id="title">Technical Consultant Program #10</span>
                    </div>
                
                    <div>
                        <h1 class="link_informasi"><img src="https://dprd.sultengprov.go.id/public/img/avatar/default.png" />
                        </h1>
                    </div>
                    <div class="contact">
                        <a href="https://linkedin.com/in/muhammad-aspan-yunandar-96311a1a3" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden></i> </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/aspanyndr" target="_blank">
                            <i className="fa fa-github"></i> </a>&nbsp;&nbsp;&nbsp;
                        <a id="link-codepen" href="https://codepen.io/aspanyndr" target="_blank">
                            <i class="fa fa-codepen"></i></a>
                        <a id="nomor">+62 856 9559 8664</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="email">aspanyundar20@gmail.com</a>
                    </div>
                </div>
            </body>
        )
    }
}

