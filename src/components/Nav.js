import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="logo">
                    <img src="./logo.png"></img>
                    <h1>FXDX</h1>
                </div>
                <ul className="nav-items">
                    <li>
                        <a href="https://fxdx.exchange">Home</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/stats">Stats</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/buy_flp">
                            Add Liquidity
                        </a>
                    </li>
                    <li>
                        <a href="https://fxdxdex.github.io/howto/">How To</a>
                    </li>
                     <li>
                        <a href="https://m.mexc.com/auth/signup?inviteCode=1HqkX">Buy USDC(ALGO)</a>
                    </li>
                </ul>
                <a className="btn" href="https://mainnet.fxdx.exchange/trade">
                    <div className="nav-btn">Trade Now</div>
                </a>
            </div>
            <ul className="mob-nav-items">
                <li>
                        <a href="https://fxdx.exchange">Home</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/stats">Stats</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/buy_flp">
                            Add Liquidity
                        </a>
                    </li>
                    <li>
                        <a href="https://fxdxdex.github.io/howto/">How To</a>
                    </li>
                     <li>
                        <a href="https://m.mexc.com/auth/signup?inviteCode=1HqkX">Buy USDC(ALGO)</a>
                    </li>
            </ul>
        </div>
    );
};

export default Nav;
