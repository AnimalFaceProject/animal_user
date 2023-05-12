import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom";

function Main({isLogin}) {

    const onClickLogout = async (e) => {
        console.log("로그아웃 버튼 눌림")
        isLogin = false
        sessionStorage.clear()
        window.location.replace("/")

    }
   
    return (
        <div>

            <div id='mainform'>
                <div className='row'>
                    <div className='mainform-title'>
                        참여 인원
                    </div>
                    <div className='mainform-title-content'>
                        <div className='main-male-title'>
                            <div id='male-text'>남</div>
                            <div id='male-number'>12</div>
                        </div>
                        <div className='main-gender-space'></div>
                        <div className='main-female-title'>
                            <div id='femal-text'>여</div>
                            <div id='female-number'>12</div>
                        </div>
                    </div>
                </div>

                <div id="main-button" className="row">
                    <Link className='button-link' to={`/result`}>
                        <button className='login-button'>매칭 결과</button>
                    </Link>
                    <Link className='button-link' to={`/myanimal`}>
                        <button className='login-button'>나의 동물상</button>
                    </Link>
                    
                    <button className='logout-button' onClick={onClickLogout}>로그아웃</button>
                </div>

            </div>
        </div>

    )
}

export default Main