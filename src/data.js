import shortId from 'shortid';
import about_thumbnail from './images/about_thumbnail.jpg';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Design from './components/Design/Design';
import Contact from './components/Contact';
import first from './images/project_first.gif';
import responsive from './images/project_responsive.gif';
import appleStore from './images/project_apple-store.gif';
import emotionalDiary from './images/project_emotional-diary.gif';
import portfolio from './images/project_portfolio.gif';
import time from './images/project_time.gif' 
import pinterest from './images/project_pinterest.gif';
import movieWeb from './images/project_movie-web.gif';
import starbucksTemplate from './images/project_starbucks-template.gif';
import enterprise1 from './images/1200x250_e.png';
import enterprise2 from './images/1200x250_2_e.png';
import enterprise3 from './images/400x400_e.png';
import enterprise4 from './images/600x150_e.png';
import government1 from './images/1200x250_g.png';
import government2 from './images/400x400_g.png';
import government3 from './images/400x400_2_g.png';
import government4 from './images/600x150_g.png';
import bank1 from './images/1200x250_b.png';
import bank2 from './images/400x400_b.png';
import bank3 from './images/600x150_b.png';
import free1 from './images/1200x250_f.png';
import free2 from './images/400x400_f.png';
import cardnews1 from './images/figma_cardnews1.png';
import cardnews2 from './images/figma_cardnews2.png';
import cardnews3 from './images/figma_cardnews3.png';
import namecard1 from './images/figma_namecard1.png';
import namecard2 from './images/figma_namecard2.png';

const listThumbnail = [
  {key : shortId.generate(),thumbnail:about_thumbnail},
  {key : shortId.generate(),thumbnail:about_thumbnail},
  {key : shortId.generate(),thumbnail:about_thumbnail},
  {key : shortId.generate(),thumbnail:about_thumbnail},
  {key : shortId.generate(),thumbnail:about_thumbnail},
]

const area = [
    { 
      key : shortId.generate(),
      id : 'About',
      title : "제1장 : Hi, Im'Anminji!",
      content : <About ref={`aboutRef`}/>,
      bgColor : "white",
      color: "black",
    },
    { 
      key : shortId.generate(),
      id : 'Skills',
      title : "제2장 : My Skills is...",
      content : <Skills ref={`skillsRef`} />,
      bgColor : "black",
      color: "white",
    },
    { 
      key : shortId.generate(),
      id : 'Projects',
      title : "제3-1장 : This is myProjects",
      content : <Projects />,
      bgColor : "white",
      color: "black",
    },
    { 
      key : shortId.generate(),
      id : 'Designs',
      title : "제3-2장 : This is myDesigns",
      content : <Design />,
      bgColor : "black",
      color: "white",
    },
    { 
      key : shortId.generate(),
      id : 'Contact',
      title : "제4장 : Please Contact me :)",
      content : <Contact />,
      bgColor : "white",
      color: "black",
    },
  ]

const swiper = [
    {
      id : shortId.generate(),
      image : first,
      text : 
          `html, css, javascript를 어느정도 배운 후에 과제로 했던 프로젝트입니다.\nindex 페이지와 로그인, 회원가입창을 제작했습니다.\n메인 페이지는 선생님이 주신 샘플을 참고하여 제작하였고, 로그인 페이지와 회원가입 페이지는 메인 페이지의 색감과 귀여운 느낌을 참고하여 직접 제작했습니다.\n단순히 귀여운 이미지만을 살리기보다는 발랄한 느낌도 추가하여 로그인 페이지와 회원가입 페이지의 각각 join, login버튼, 로고 hover시 기능을 넣어 구현해보았습니다.`
        ,
      info: [ 
        {
          type :"개인",
          markUp :"html, css, javascript"
        },
      ],
      link : "https://anminji46.github.io/projects/first_homepage/main/",
      git : "https://github.com/anminji46/projects/tree/main/first_homepage"
    },
    {
      id : shortId.generate(),
      image : responsive,
      text : `html, css, javascript 사용하여 반응형으로 제작한 웹사이트 과제입니다.\n만화캐릭터 짱구를 테마로 잡아 극장판을 소개하고, 최신 뉴스와 여러정보들을 소개하는 홈페이지를 제작해보았습니다.`,
      info: [ 
        {
          type :"개인",
          markUp :"html, css, javascript"
        },
      ],
      link : "https://anminji46.github.io/projects/responsive/",
      git : "https://github.com/anminji46/projects/tree/main/responsive"
    },
    {
      id : shortId.generate(),
      image : appleStore,
      text : `team프로젝트로 진행했던 APPLE 페이지 리뉴얼하기  프로젝트입니다.\n전체적인 디자인과, header, footer영역, 오른쪽 메뉴영역을 담당했습니다.\n애플의 대표제품인 아이폰의 다이나믹아일랜드에서 디자인을 착안하여 header의 메뉴를 구현해보았습니다.\nfooter영역의 방대한 내용은 필요한 내용이나 너무 많은 내용에 눈에 잘 안들어오는 점을 참고하여 없애기보다는 접고 펼치기를 통하여 정리했습니다.\n오른쪽 메뉴를 통하여 원하는 카테고리로 언제든 이동할수있게 편의성을 제공합니다.\n오른쪽 햄버거 메뉴 클릭 시 top버튼을 두어 scrollToTop기능을 통해 페이지 가장 위쪽으로 이동합니다.`,
      info: [ 
        {
          type :"팀",
          markUp :"html, css, javascript, jQuery"
        },
      ],
      link : "https://anminji46.github.io/projects/apple_store/",
      git : "https://github.com/anminji46/projects/tree/main/apple_store",
    },
    {
      id : shortId.generate(),
      image : emotionalDiary,
      text : `react를 이용한 감정일기장 만들기 과제입니다.\n이 프로젝트를 통해 react를 이용하여 하나부터 열까지 직접 만들어보며 문법에 대해서 조금 더 자세히 공부했으며, 앱 최적화, 로컬스토리지를 이용한 데이터 저장도 구현했습니다.`,
      info: [ 
        {
          type :"개인",
          markUp :"react, scss"
        },
      ],
      link : "https://anminji46.github.io/emotional-diary",
      git : "https://github.com/anminji46/emotional-diary"
    },
    {
      id : shortId.generate(),
      image : portfolio,
      text : `react를 이용하여 portfolio를 만들었습니다.\n웹툰을 테마로 잡았습니다.\nmain페이지는 "네이버웹툰"을 참고하여 포트폴리오 정보를 담고있는 페이지로 구현했고, 썸네일 클릭 시 container페이지로 이동할 수 있게 구현했습니다.`,
      info: [ 
        {
          type :"개인",
          markUp :"react, scss"
        },
      ],
      link : "https://anminji46.github.io/my_portfolio/",
      git : "https://github.com/anminji46/my_portfolio"
    },
    {
      id : shortId.generate(),
      image : time,
      text : `시간변화에 따른 웹디자인이라는 주제로 수업시간에 만들었던 웹사이트 입니다.\n전체적인 구조와 스타일은 html과 css로 진행했으며, 이 과정을 통해 javascript와 jQuery로 현재 시간을 가져와 실시간으로 움직이는 시간을 구현하는 것과 class명을 추가, 제거하는 기능으로 클릭시 각 테마에 맞는 화면으로 전환되는 것을 배웠습니다.`,
      info: [ 
        {
          type :"수업",
          markUp :"html, css, javascript"
        },
      ],
      link : "https://anminji46.github.io/projects/timeWeb/",
      git : "https://github.com/anminji46/projects/tree/main/timeWeb"
    },
    {
      id : shortId.generate(),
      image : pinterest,
      text : `핀터레스트타입의 반응형 웹사이트를 구현했습니다.`,
      info: [ 
        {
          type :"수업",
          markUp :"html, css, javascript"
        },
      ],
      link : "https://anminji46.github.io/projects/pinterest_responsive/",
      git : "https://github.com/anminji46/projects/tree/main/pinterest_responsive"
    },
    {
      id : shortId.generate(),
      image : movieWeb,
      text : `vanilla javascript로 진행한 프로젝트입니다.\napi를 이용하여 정보를 받아와 검색 기능과 상세페이지를 구현했습니다.`,
      info: [ 
        {
          type :"수업",
          markUp :"javascript, css, scss"
        },
      ],
      link : "https://vanillajs-movie-app-dun.vercel.app/#/",
      git : "https://github.com/anminji46/vanillajs-movie-app"
    },
    {
      id : shortId.generate(),
      image : starbucksTemplate,
      text : `스타벅스 템플릿(main page, signin page)을 구현해보았습니다.\ncss와 javascript는 common, main 나누어 공통부분과 그렇지 않은 부분으로 파일을 나누어 정리하였고, 그 외 signin페이지의 개별 css와 youtube영상 처리를 위한 별도의 js로 나누어정리하였습니다.\ngsap 라이브러리를 이용하여 스크롤이 일정부분으로 이동 시 배지를 보이거나 안보이게 처리, to-top버튼을 클릭하여 화면 상단으로 이동하는 기능, visual영역 안 요소를 순차적으로 보이기, 유튜브 위 이미지  애니메이션을 구현했습니다.\n스타벅스 프로모션, 페이지 아래 awards영역은 swiper로 구현했습니다.\nYoutube프레임은 API비동기 처리를 통해 구현했습니다.\nYoutube와 awards사이 section영역의 애니메이션은 css의 애니메이션을 이용하여 구현했습니다.`,
      info: [ 
        {
          type :"수업",
          markUp :"html, javascript, css"
        },
      ],
      link : "https://anminji46.github.io/starbucks_template_project/",
      git : "https://github.com/anminji46/starbucks_template_project"
    },
  ]

  const menus = [
    {
      id : shortId.generate(),
      menu : 'About'
    },
    {
      id : shortId.generate(),
      menu : 'Skills'
    },
    {
      id : shortId.generate(),
      menu : 'Projects'
    },
    {
      id : shortId.generate(),
      menu : 'Designs'
    },
    {
      id : shortId.generate(),
      menu : 'Contact'
    },
  ]

  const design = [
    {
      id : shortId.generate(),
      img : enterprise1,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#대기업'}, 
        {txt : '#1200x250'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : enterprise2,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#대기업'}, 
        {txt : '#1200x250'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : enterprise3,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#대기업'}, 
        {txt : '#400x400'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : enterprise4,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#대기업'}, 
        {txt : '#600x150'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : government1,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#정부부처'}, 
        {txt : '#1200x250'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : government2,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#정부부처'}, 
        {txt : '#400x400'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : government3,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#정부부처'}, 
        {txt : '#400x400'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : government4,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#정부부처'}, 
        {txt : '#600x150'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : bank1,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#은행'}, 
        {txt : '#1200x250'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : bank2,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#은행'}, 
        {txt : '#400x400'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : bank3,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#은행'}, 
        {txt : '#600x150'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : free1,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#자유'}, 
        {txt : '#1200x250'}, 
        {txt : '#png'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : free2,
      text :[
        {txt : '#웹배너_만들기'},
        {txt : '#자유'}, 
        {txt : '#400x400'}, 
        {txt : '#jpg'},
        {txt : '#photoshop'},
      ]
    },
    {
      id : shortId.generate(),
      img : cardnews1,
      text :[
        {txt : '#카드뉴스_만들기'},
        {txt : '#글귀'}, 
        {txt : '#300x400'}, 
        {txt : '#figma'}
      ]
    },
    {
      id : shortId.generate(),
      img : cardnews2,
      text :[
        {txt : '#카드뉴스_만들기'},
        {txt : '#글귀'}, 
        {txt : '#300x400'}, 
        {txt : '#figma'}
      ]
    },
    {
      id : shortId.generate(),
      img : cardnews3,
      text :[
        {txt : '#카드뉴스_만들기'},
        {txt : '#글귀'}, 
        {txt : '#300x400'}, 
        {txt : '#figma'}
      ]
    },
    {
      id : shortId.generate(),
      img : namecard1,
      text :[
        {txt : '#명함만들기'},
        {txt : '#명함'}, 
        {txt : '#300x400'}, 
        {txt : '#figma'}
      ]
    },
    {
      id : shortId.generate(),
      img : namecard2,
      text :[
        {txt : '#명함만들기'},
        {txt : '#명함'}, 
        {txt : '#300x400'}, 
        {txt : '#figma'}
      ]
    },
  ]


export {listThumbnail,area, swiper, menus, design}; 



