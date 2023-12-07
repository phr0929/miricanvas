import './App.css';
import { useEffect, useState } from 'react';
import './swiper.css'
import ps from './resource/photoshop.png'
import ai from './resource/ai.png'
import clip from './resource/clip.png'
import css from './resource/css.png'
import html from './resource/html.png'
import excel from './resource/excel.png'
import js from './resource/js.png'
import pro from './resource/pro.png'
import c1 from './resource/c1.svg'
import c2 from './resource/c2.svg'
import c3 from './resource/c3.svg'
import c4 from './resource/c4.svg'
import c5 from './resource/c5.svg'
import v1 from './resource/c1.mp4'; 
import v2 from './resource/c2.mp4'; 
import v3 from './resource/c3.mp4'; 
import v4 from './resource/c4.mp4'; 
import port1 from './resource/port1.jpg'
import port2 from './resource/port2.jpg'
import port3 from './resource/port3.jpg'
import port4 from './resource/port4.jpg'
import port5 from './resource/port5.jpg'
import port6 from './resource/port6.jpg'
import port7 from './resource/port7.jpg'
import port8 from './resource/port8.jpg'
import profile from './resource/profile.jpg'
import back from './resource/back.svg';
import next from './resource/next.svg';
import nav from './resource/nav.svg';
import cancel from './resource/cancel.svg';
import gif1 from './resource/gif/1.gif';
import gif2 from './resource/gif/2.gif';
import gif3 from './resource/gif/3.gif';
import gif4 from './resource/gif/4.gif';
import gif5 from './resource/gif/5.gif';
import gif6 from './resource/gif/6.gif';
import gif7 from './resource/gif/7.gif';
import gif8 from './resource/gif/8.gif';
import gif9 from './resource/gif/9.gif';
import gif10 from './resource/gif/10.gif'; 
import gif11 from './resource/gif/11.gif';
import gif12 from './resource/gif/12.gif';
import gif13 from './resource/gif/13.gif';
import gif14 from './resource/gif/14.gif';
import gif15 from './resource/gif/15.gif';
import gif16 from './resource/gif/16.gif';
import gif17 from './resource/gif/17.gif';
import gif18 from './resource/gif/18.gif';
import gif19 from './resource/gif/19.gif';
import gif20 from './resource/gif/20.gif'; 
import gif21 from './resource/gif/21.gif';
import gif22 from './resource/gif/22.gif';
import gif23 from './resource/gif/23.gif';
import gif24 from './resource/gif/24.gif';
import frame1 from './resource/frame/1.svg';
import frame2 from './resource/frame/2.svg';
import frame3 from './resource/frame/3.svg';
import frame4 from './resource/frame/4.svg';
import frame5 from './resource/frame/5.svg';
import frame6 from './resource/frame/6.svg';
import frame7 from './resource/frame/7.svg';
import frame8 from './resource/frame/8.svg';
import frame9 from './resource/frame/9.svg';
import frame10 from './resource/frame/10.svg'; 
import frame11 from './resource/frame/11.svg';
import frame12 from './resource/frame/12.svg';
import frame13 from './resource/frame/13.svg';
import frame14 from './resource/frame/14.svg';
import frame15 from './resource/frame/15.svg';
import frame16 from './resource/frame/16.svg';
import frame17 from './resource/frame/17.svg';
// import img1 from './resource/image/1.svg';
import img2 from './resource/image/2.svg';
// import img3 from './resource/image/3.svg';
// import img4 from './resource/image/4.svg';
import img5 from './resource/image/5.svg';
import img6 from './resource/image/6.svg';
import img7 from './resource/image/7.svg';
import img8 from './resource/image/8.svg';
import img9 from './resource/image/9.svg';
import img10 from './resource/image/10.svg';
import img11 from './resource/image/11.svg';
import img12 from './resource/image/12.svg';
import img13 from './resource/image/13.svg';
import img14 from './resource/image/14.svg';
import img15 from './resource/image/15.svg';
import img16 from './resource/image/16.svg';
import img17 from './resource/image/17.svg';
import img18 from './resource/image/18.svg';
import img19 from './resource/image/19.svg';
import img20 from './resource/image/20.svg';
import img21 from './resource/image/21.svg';
import img22 from './resource/image/22.svg';
import img23 from './resource/image/23.svg';
import img24 from './resource/image/24.svg';
import img25 from './resource/image/25.svg';
import img26 from './resource/image/26.svg';
import img27 from './resource/image/27.png';
import img28 from './resource/image/28.png';
import img29 from './resource/image/29.png';
import img30 from './resource/image/30.png';
import img31 from './resource/image/31.png';
import img32 from './resource/image/32.png';
import img33 from './resource/image/33.png';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation,Pagination,Scrollbar,Mousewheel,A11y} from "swiper"
const App =  (()=> {

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]); // *

  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()
 

  useEffect(()=>{
    setOneVh();
    window.scrollTo(0,0)
    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[]) 

  const gifList = [gif2,gif3,gif4,gif6,gif9,gif10,gif11,gif15,gif17,gif20,gif22,gif24]

  const frameList = [frame1,frame13,frame10,frame3,frame5,frame6,
    frame7,frame14,frame8,frame9,frame12,frame15,]
  const imgList = [img2,img5,img8,img9,img13,img16,img19
    ,img24,img27,img28,img30,img31]
  
  const list =[
    {title:'곱빼기 앱 개발',content:'서산시 배달앱 곱빼기 프론트엔드 개발 / 디자인',tool:[ps,ai,html,css,js],link:['https://play.google.com/store/apps/details?id=tc.wo.pulse.community','https://apps.apple.com/kr/app/%EA%B3%B1%EB%B9%BC%EA%B8%B0/id1621478258'],img:port4},
    {title:'서산개백수 포트폴리오 제작',content:'유튜브 서산개백수 포트폴리오 사이트 반응형으로 제작',tool:[ps,ai,html,css,js],link:['https://phr0929.github.io/'],img:port3},
   
    {title:'곱빼기 웹사이트 제작',content:'23.12.07 서버 오류, 수정중...',tool:[ps,html,css,js],link:['https://pulse.wo.tc/Double'],img:port2},
   //서산시 배달앱 곱빼기 사이트 반응형으로 제작//

    {title:'PULSE 웹사이트 제작',content:'23.12.07 서버 오류, 수정중...',tool:[ps,html,css,js],link:['https://pulse.wo.tc/'],img:port1},
   //소프트웨어 개발업체 PULSE 사이트 반응형으로 제작//

    // {title:'도담헤어 로고 제작',content:'미용실 도담헤어 로고 디자인',tool:[ps],link:[],img:port6},
    // {title:'곱빼기 로고 제작',content:'서산시 배달앱 곱빼기 로고 디자인',tool:[ai],link:[],img:port7},
  ]

  const chList =[
    {title:'불량이',
     content:'불만 고양이',
     personality:['매사에 불만이 많음','짠돌이 고양이','잔소리꾼'],
     color:['#5d5d5d','#fff','#ff9b9f'],
     img:c1,video:v1},
    {title:'즐량이',
     content:'즐거운 고양이',
     personality:['항상 즐거움','알콜러버! 술을 사랑함','흥이 많음'],
     color:['#ffcccd','#fff','#ff9b9f',],
     img:c2,video:v2},
    {title:'겁량이',
     content:'겁쟁이 고양이',
     personality:['항상 겁에 질려있음','낯을 많이 가림','노래 부르기를 좋아함'],
     color:['#ffe1a0','#fff','#ff9b9f',],
     img:c3,video:v3},
    {title:'식댕이',
     content:'식빵 닮은 강아지',
     personality:['항상 겁에 질려있음','낯을 많이 가림','노래 부르기를 좋아함'],
     color:['#fff3e6','#c89264','#ff3636',],
     img:c4,video:v4},    
  ]


  const [pageNumber,setPageNumber] = useState(0)
  const [swiper,setSwiper] = useState(null)
  const [portNumber,setPortNumber] = useState(0)
  
  const [chNumber,setChNumber] = useState(0)
  const [navBar,setNavBar] = useState(false)
  const [ctgr,setCtgr] = useState(0)

  const handleCtgr = (idx) => {
    setCtgr(idx)
  }
  
  const handleChNumber = (idx) => {
    setChNumber(idx)
          
    let video = document.getElementById("myVideo");
    video.load();
    // video.play();
  }
  const handlePortfolio = (lf) => {
    let number = portNumber
    if(lf==='left'){
      if(number===0){
        number = 3;   
      }else{
        number = number - 1;
      }
    }else{
      if(number===3){
       
        number = 0; 
      }else{

        number = number + 1;
      }
    }
    
    setPortNumber(number)
  }
  
  const handleCh = (lf) => {


    let number = chNumber

    


    if(lf==='left'){
      if(number===0){
        number = 3;   
        }else{
          number = number - 1;
        }
      }else{
        if(number===3){
        
          number = 0; 
        }else{

          number = number + 1;
        }
      }

      
      let video = document.getElementById("myVideo");
      video.load();
      // video.play();
      
      setChNumber(number)
    }
  
  
    
    return (
      <div className="App mainFont"> 
        <div className='menuBar'> 
          <div className='logo'>
            P.HYERIM
          </div>
          <div className='menu'>
            <div onClick={()=>swiper.slideTo(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
            <div onClick={()=>swiper.slideTo(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
            <div onClick={()=>swiper.slideTo(2)} className={pageNumber>=2?'menuOn':'menuOff'} style={{width:85}}>PORTFOLIO</div>
          </div>
          {navBar?
          <img onClick={()=>setNavBar(navBar?false:true)} src={cancel} alt='' className='nav' />
          :<img onClick={()=>setNavBar(navBar?false:true)} src={nav} alt='' className='nav' />}
        </div>
        <div className='navMenuBar' style={{display:navBar?'flex':'none'}}>
          <div className='navMenu'>
            <div onClick={()=>swiper.slideTo(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
            <div onClick={()=>swiper.slideTo(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
            <div onClick={()=>swiper.slideTo(2)} className={pageNumber>=2?'menuOn':'menuOff'}>PORTFOLIO</div>
          </div>
        </div>
        

          <Swiper     
            onSwiper = {setSwiper} className='portfolioSwiper'
            direction='vertical' 
            speed={1000}
            mousewheel= {true}
            modules={[Navigation, Pagination, ]} 
            pagination={
              {el: ".swiper-pagination", 
              type : 'bullets',
              clickable: true,}}  
            onSlideChange={(e) =>setPageNumber(e.realIndex)}
            autoHeight={true} 
            slidesPerView={1} 
            initialSlide={0}                          
            loop={false}
            loopedSlides={1}
            // observer={true}
            observeParents={true}
            resistance={true}>

              <SwiperSlide> 
                <div className='slide'>
                  <div className='mainText'>
                    <div className='titleFont'>
                      UI/UX designer
                    </div>
                    {/* <div style={{position:'relative',width:'100%',maxWidth:1300,display:'flex',
                    alignItems:'center',justifyContent:'center'}}>
                      <div style={{fontSize:50,fontWeight:900,width:'100%',paddingLeft:10,boxSizing:'border-box',
                      textAlign:'left'}}>UI/UX designer</div>
                    </div> */}
                    <div className='titleFont'>
                      P.HYERIM
                    </div>
                    <span className='titleFont'>
                      P.HR
                    </span>
                    <div className='electronicDisplay'>
                      UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer
                    </div>
                    {/* <div style={{position:'relative',width:'100%', 
                    display:'flex',alignItems:'center',justifyContent:'center',marginTop:50}}>
                      <div className='mainCenterLogo' style={{position:'absolute',fontSize:140,fontWeight:900,zIndex:1000,maxWidth:1300,width:'100%',
                    textAlign:'left',paddingLeft:5,boxSizing:'border-box'}}>P.HYERIM</div>
                      <div className='electronicDisplay'>UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer</div>
                    </div>   */}
                  </div>
                  <div className='mouseIcon'>
                      <div className='mouseDown'>
                        <div className='mousePoint'/>
                      </div>
                  </div>
                </div>
              </SwiperSlide> 
              <SwiperSlide> 
                <div className='slide'>
                  <div className='aboutLayout' style={{paddingTop:70}}> 
                    <div className='aboutTitle'>
                      <span/>
                      CARRERS
                    </div>
                    <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2023.10 ~
                      </div>
                      <div className='carrersDate2'>
                        2012.10 ~<br/>
                      </div> 
                      <div className='carrersLine'>
                        <div className='circle'/>
                        <div className='line'/>
                      </div>
                      
                      <div className='carrersContents'>
                        <span>
                          미리캔버스 기여자 활동
                        </span>
                        <div>
                          요소 디자인
                        </div>
                      </div>
                    </div> 

                    <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2020.02 ~ 2023.08
                      </div>
                      <div className='carrersDate2'>
                        2020.02 ~<br/>2023.08
                      </div>
                      <div className='carrersLine'>
                        <div className='circle'/>
                        <div className='line'/>
                      </div>
                      <div className='carrersContents'>
                        <span>
                          PULSE
                        </span>
                        <div>
                          디자인 / 프론트엔드 개발
                        </div>
                      </div>
                    </div>   
                    <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2014.02 ~ 2019.12
                      </div>
                      <div className='carrersDate2'>
                        2014.02 ~<br/>2019.12
                      </div>
                      <div className='carrersLine'>
                        <div className='circle'/>
                        <div className='line'/>
                      </div>
                      <div className='carrersContents'>
                        <span>
                          우리아이책더미 운영
                        </span>
                        <div>
                          오픈마켓 상품 등록, 관리
                        </div>
                      </div>
                    </div>
                
                    <div className='lastCarrers'>
                      <span/>
                    </div>
                  </div>
              
                  <div className='aboutLayout'> 
                  
                    <div className='aboutTitle'>
                      <span/>
                      SKILLS
                    </div> 
                    <div className='skillsLayout'>
                      <div className='skills'>
                        <img className='skilsImg' src={ps} alt=''/>
                        <div>포토샵</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={ai} alt=''/>
                        <div>일러스트</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={pro} alt=''/>
                        <div>프로크리에이트</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={clip} alt=''/>
                        <div>클립스튜디오</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={js} alt=''/>
                        <div>자바스크립트</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={html} alt=''/>
                        <div>HTML</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={css} alt=''/>
                        <div>CSS</div>
                      </div>
                      <div className='skills'>
                        <img className='skilsImg' src={excel} alt=''/>
                        <div>엑셀</div>
                      </div>
                    </div>                  
                  </div>

                  <div className='electronicDisplay'>
                    ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                  </div>
                        
                </div>
              </SwiperSlide> 
              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle'>
                      <span/>
                      APP / WEB SITE
                    </div>
                    <div className='portfolioLayout'>
                        <img onClick={()=>handlePortfolio('left')} src={back} className='arrowLeft' alt=''/>
                        <div className='portfolioItem'>
                          <img src={list[portNumber].img} alt='' className='portImg'/>
                          <div className='portContents'>
                            <div className='portTitle'>{list[portNumber].title}</div>
                            <div className='portContent'>{list[portNumber].content}</div>
                            <div className='portTool'>
                              {list[portNumber].tool.map((vval,vidx)=>
                                <img key={vidx} src={vval} alt=''/>
                              )} 
                            </div>
                            <div className='portLink'>
                              {list[portNumber].link.length===1?
                                list[portNumber].link.map((vvval,vvidx)=>
                                  <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                    {portNumber===4?'인스타그램 보러가기':'사이트 바로가기'}</div>
                              ):list[portNumber].link.map((vvval,vvidx)=>
                                <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                  {vvidx===0?'Google Play':'App Store'}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      <img onClick={()=>handlePortfolio('right')} src={next} className='arrowRight' alt=''/>
                      <div className='portPaddingBox'/>
                    </div>
                    <div className='portButtonBar'>
                      {list.map((val,idx)=>
                        <div className='portButtonItem' onClick={()=>setPortNumber(idx)} key={idx}>
                          <div className={idx===portNumber?'portOn':'portOff'}/>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='electronicDisplay'>
                    PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
                  </div>
                </div>  
              </SwiperSlide> 

              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle'>
                      <span/>
                      CHARACTER
                    </div>
                    <div className='characterLayout'>
                        <img onClick={()=>handleCh('left')} src={back} className='arrowLeft' alt=''/>
                        <div className='characterItem'>
                          <img src={chList[chNumber].img} alt='' className='portImg'/>
                          <div className='portContents'>
                            <div className='portTitle'>{chList[chNumber].title}</div>
                            <div className='portContent'>{chList[chNumber].content}</div>
                            <div className='chColor'>
                              {chList[chNumber].color.map((vval,vidx)=>
                                <div key={vidx} style={{backgroundColor:vval}}/>
                              )} 
                            </div>
                            <div className='chLink'>
                              <div className='goButton' onClick={()=>window.open('https://instagram.com/discontent.cat')}>
                                    인스타그램 보러가기
                              </div> 
                              <div className='chVideoLayout'>
                                <div>
                                  <video 
                                    id="myVideo"
                                    autoPlay
                                    muted
                                    loop>
                                    <source src={chList[chNumber].video} type="video/mp4"/>
                                  </video>
                                </div>
                             
                             </div>
                          </div>
                          
                        </div>
                      </div>
                    <img onClick={()=>handleCh('right')} src={next} className='arrowRight' alt=''/>
                    <div className='portPaddingBox'/>
                  </div>
                  <div className='portButtonBar'>
                    {chList.map((val,idx)=>
                      <div className='portButtonItem' onClick={()=>handleChNumber(idx)} key={idx}>
                        <div className={idx===chNumber?'portOn':'portOff'}/>
                      </div>
                    )}
                  </div>
                 
                </div>
                <div className='electronicDisplay'>
                  PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
                </div>
              </div>  
              </SwiperSlide> 

              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle2'>
                      <span/>
                      MIRICANVAS @phr
                    </div>
                    <div className='miriLayout'>
                      <div className='miriCtgr'>
                        <div onClick={()=>handleCtgr(0)} className={ctgr===0?'miriCtgrOn':'miriCtgrOff'}>애니</div>
                        <div onClick={()=>handleCtgr(1)} className={ctgr===1?'miriCtgrOn':'miriCtgrOff'}>프레임</div>
                        <div onClick={()=>handleCtgr(2)} className={ctgr===2?'miriCtgrOn':'miriCtgrOff'}>이미지</div>
                      </div>
                      <div className='miriImgLayout'>
                        {ctgr===0?
                          gifList.map((val,idx)=>
                            <img src={val} alt=''/>
                          ):ctgr===1?
                          frameList.map((val,idx)=>
                            <img src={val} alt=''/>
                          ):
                          imgList.map((val,idx)=>
                          <img src={val} alt=''/>
                          )}
                       
                        {/* {gifList.map((val,idx)=>
                          <img src={val} alt='' style={{objectFit:'contain',padding:20,boxSizing:'border-box',width:300,minWidth:300,height:300,
                          marginLeft:10,marginRight:10,backgroundColor:'#fff',borderRadius:10}}/>
                        )} */}
                        {/* {frameList.map((val,idx)=>
                         <img src={val} alt='' style={{objectFit:'contain',padding:20,boxSizing:'border-box',width:300,minWidth:300,height:300,
                         marginLeft:10,marginRight:10,backgroundColor:'#fff',borderRadius:10}}/>
                        )} */}
                        {/* <div style={{width:300,minWidth:300,height:300,marginLeft:5,marginRight:5,border:'1px solid #000'}}>ㄹ</div>
                        <div style={{width:300,minWidth:300,height:300,marginLeft:5,marginRight:5,border:'1px solid #000'}}>ㄹ</div>
                        <div style={{width:300,minWidth:300,height:300,marginLeft:5,marginRight:5,border:'1px solid #000'}}>ㄹ</div>
                        <div style={{width:300,minWidth:300,height:300,marginLeft:5,marginRight:5,border:'1px solid #000'}}>ㄹ</div>
                        <div style={{width:300,minWidth:300,height:300,marginLeft:5,marginRight:5,border:'1px solid #000'}}>ㄹ</div> */}
                      </div>
                      <div className='portPaddingBox'/>
                    </div>
                    
                 
                  </div>
                  <div className='electronicDisplay'>
                    PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
                  </div>
                </div>  
              </SwiperSlide> 
            <div className='paginationBar'>
              <div className='swiper-pagination'/>
            </div>
        </Swiper>

       
       
    </div>
        
      

       


  );
})

export default App;
