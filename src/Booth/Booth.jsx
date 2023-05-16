import React from 'react'
import "./Booth.css"
import booth from "../Image/booth.jpg"

function Booth() {
    return (
        <div id="boothform">
            <div className='booth-title'>
                동물상 미팅
            </div>
            <div className='booth-image-container'>
                <img className='booth-image' src={booth}></img>
            </div>
            <div className='booth-content-container'>
                <div className='booth-content1'>
                    {/* <span className='booth-content-title'> 동물상 미팅 (조준희 부스) <br></br></span> */}
                    <span className='booth-content-sub-title'>&lt; 동물상 측정 체험 &gt;<br></br>
                    </span>
                    <span>
                        💰 비용 : 무료<br></br>
                        나와 닮은 동물은 무엇일까?
                        <br></br>
                        부스에서 나의 동물상도 알아보고, 스탬프도 받아가자! <br></br>
                    </span>
                </div>
                <div className='booth-content2'>
                    <span className='booth-content-sub-title'>
                        &lt; 동물상 미팅 &gt;
                        <br></br>
                    </span>
                    <span>
                        💰 비용 : 2000원<br></br>
                        우리 학교에 내가 선호하는 동물상의 이상형은 없을까?
                        <br></br>
                        선호하는 동물상을 고른 후 동물상 미팅에 참여해보세요!
                        <br></br>
                        1:1, 2:2, 3:3으로 진행되는 미팅! 어떻게 미팅할지, 선택은 당신에게 달려있습니다! 
                        <br></br>단돈 2000원에 미팅 참여하면 <mark>형광팔찌</mark>는 덤!
                        <br></br>
                        <br></br>                        📌 참여방법
                        <br></br>
                        1. 현장 부스에서 동물상을 측정 후 마음에 드는 동물상을 선택해주세요! <br></br>
                        2. 오후 5시에 이름과 전화번호로 로그인 후 매칭결과를 확인해주세요 <br></br>
                        3. 매칭결과 페이지 내 오픈채팅 참여 버튼을 통해 매칭방에 입장해주세요 <br></br>
                        4. 모든인원이 참여하면 미팅 시작!
                        <br></br>
                        <br></br>
                        📌 안내사항
                        <br></br>
                        미팅에 참여하지 않아도 팔찌는 별도 구매가능합니다.<br></br>
                        <br></br>
                        ⏰ 부스운영 시간
                        <br></br>
                        오전 10:00 ~ 오후 4:30까지<br></br>
                        <br></br> 
                        <span className='sub-notice'>
                        ⚠️ 주의사항<br></br>
                        부득이하게 취소를 해야 할 경우 오후 4시30분 전 "문의하기"를 통해 미리 알려주세요!
                        </span>
                       

                    </span>
                </div>

            </div>
        </div>
    )
}

export default Booth