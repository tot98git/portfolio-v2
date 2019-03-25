import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import computer from "../assets/computer.gif";
import text from "../assets/thankyou.gif";
import "./style.scss";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: "millenial"
        };
    }

    render() {
        const { version } = this.state;
        return (
            <div className="homepage-wrapper">
                <div className="homepage-container millenial">
                    <img src={computer} alt="8 bit Computer GIF" />
                    <div className="title-wrapper">
                        <h1>Totiworks</h1>
                    </div>
                    <Menu />
                    <Contact />
                    {version === "millenial"
                        && <img src={text} alt="Thank you 8bit gif" className="millenial-img" />
                    }
                </div>
            </div>
        );
    }
}
