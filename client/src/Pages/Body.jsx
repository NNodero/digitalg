import React from 'react'
import body from './body.module.scss'
import logo from '../Assets/Img/dp-logo2.png'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import img1 from '../Assets/Img/1.webp'
import img2 from '../Assets/Img/2.webp'
import img3 from '../Assets/Img/3.webp'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logoimgs from '../Assets/logoimg'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';export default function Body() {
    

    const [text] = useTypewriter({
        words: ['experiences.','solutions.','website.','user journeys.','portals.', 'transformations.','apps.'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:120,
        delaySpeed:1000,

    })

    const aaa = [
        {
            img:img1,
            title:"Greater Cities Commission",
            header:"Digital Garden transforms GCC's strategy with new website",
            description:"We evolved the NSW Design System into a striking iteration for the Greater Cities Commission – the basis for the new website we designed and developed that promotes planning for Sydney's metropolitan areas and surrounds.",
            link: 'https://www.digitalgarden.com.au/work/digital-garden-transforms-gccs-strategy-new-website'

        },
        {
            img:img2,
            title:"The APP Group",
            header:"Connecting those who shape Australia’s infrastructure future",
            description:"Connecting those who shape Australia’s infrastructure future.",
            link:"https://www.digitalgarden.com.au/work/connecting-those-who-shape-australias-infrastructure-future"
        },
        {
            img:img3,
            title:"NBRS",
            header:"Designing environments with the power to shape people’s lives",
            description:"A clean, beautifully-branded marketing asset for NBRS to showcase its architectural work around Australia.",
            link:"https://www.digitalgarden.com.au/work/nbrs"
        }

    ];

    const data = [
        {
        img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/Planning.svg",
        hoverimg:'https://www.digitalgarden.com.au/_next/static/media/pink-cloud.46904af9.png',
        title:"Digital strategy",
        subtitle:"A digital project's success is all in the planning",
        link:"https://www.digitalgarden.com.au/services/planning-strategy"
        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/Content.svg",
            hoverimg:"	https://www.digitalgarden.com.au/_next/static/media/green-cloud.e6436ea8.png",
            title:"Content strategy",
            subtitle:"Content rules − and we can help empower you",
            link:"https://www.digitalgarden.com.au/services/content"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/UX.svg",
            hoverimg:"https://www.digitalgarden.com.au/_next/static/media/blue-cloud.040bd863.png",
            title:"User experience (UX) design",
            subtitle:"Designing digital products that people love to use.",
            link:"https://www.digitalgarden.com.au/services/user-experience-ux"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/Design.svg",
            hoverimg:"	https://www.digitalgarden.com.au/_next/static/media/pink-cloud.46904af9.png",
            title:"Web design",
            subtitle:"Gaining a competitive edge with great ",
            link:"https://www.digitalgarden.com.au/services/web-design"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/Development.svg",
            hoverimg:"https://www.digitalgarden.com.au/_next/static/media/green-cloud.e6436ea8.png",
            title:"Web Development",
            subtitle:"The magic of development brings big ideas to life",
            link:"https://www.digitalgarden.com.au/services/development"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2022-09/GovCMS.svg",
            hoverimg:"https://www.digitalgarden.com.au/_next/static/media/blue-cloud.040bd863.png",
            title:"GovCMS",
            subtitle:"Building you a strong foundation on GovCMS",
            link:"https://www.digitalgarden.com.au/services/govcms"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2021-09/Service%20Icons.svg",
            hoverimg:"https://www.digitalgarden.com.au/_next/static/media/pink-cloud.46904af9.png",
            title:"Support & optimisation",
            subtitle:"Ongoing security, enhancement and evolution",
            link:"https://www.digitalgarden.com.au/services/support-optimisation"

        },
        {
            img:"https://api.digitalgarden.com.au/sites/default/files/icons/2022-09/Cloud%20hosting.svg",
            hoverimg:"https://www.digitalgarden.com.au/_next/static/media/green-cloud.e6436ea8.png",
            title:"Cloud hosting",
            subtitle:"High-availability hosting coupled with Drupal support",
            link:"https://www.digitalgarden.com.au/services/cloud-hosting"

        },
    ]


  return (
    <div className={body.body}>
        <section>
            <div className={body.box1}>
            <div className={body.heading}>
                <h2>We craft digital</h2>
                <div className={body.typer}><h2>{text}<Cursor/></h2></div>

            </div>
            <div className={body.text}>We’re a digital agency, with offices in both Sydney and Melbourne, specialising in UX design, web design and Drupal development projects.</div>
            <div className={body.btnbox}><a href='https://www.digitalgarden.com.au/work'><button>View our work</button></a></div>
            </div>
            <div className={body.animatedimg}><img src={logo} alt='logo'/></div>
        </section>


        <section>
            <div className={body.arrow}>
                 <KeyboardArrowDownIcon className={body.arrowdown}/>
            </div>
        </section>


        <section>
            <div className={body.container}>
        {aaa.map((data) => 
                <div className={body.one}>
                    <a href={data.link}>
                <div className={body.image}><img src={data.img} alt='' className={body.img}/></div>
                <div className={body.cover}>
                    <div className={body.cover_header}>{data.title}</div>
                    <h3 className={body.cover_subheader}>{data.header}</h3>
                   <div className={body.pg}> <p>{data.description}</p>
                   <div></div>
                </div>
                </div>
                </a>
                </div>
                )}
            </div>
        </section>


        <section>
            <div className={body.textmain}>
                <div className={body.text2}> <span>Who we are</span></div>                

                <div className={body.textbox}>
                    <div className={body.text3}><p>Digital Garden is a team of digital and content strategists, UX designers, web designers and web development specialists – dedicated to creating seamless online experiences for our clients.</p></div>
                    <div className={body.text4}><p>Since opening our Sydney digital agency in 2003, Digital Garden has delivered hundreds of responsive digital experiences and website designs across multiple platforms, for corporate, government and not-for-profit.</p>
                        <p>Every client is different, each with divergent business needs and goals. Digital Garden creates custom-developed digital solutions to help clients meet those business goals.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
                <div className={body.main1}> 
                    <div className={body.text5}><span>What we do</span></div>
                    <div className={body.box3}>
                        {data.map((data)=>(
                        <a href={data.link} className={body.link}>
                        <div className={body.item}>
                            <div className={body.imgbox}>
                                <img src={data.img} alt=''/>
                                <div className={body.hoverimg}><img src={data.hoverimg} alt=''/></div>
                              </div>
                            <div className={body.title}><h3>{data.title}</h3> <div><KeyboardArrowRightIcon className={body.arrow}/></div></div>
                            <div className={body.subtitle}><span>{data.subtitle}</span></div>

                        </div>
                        </a>
                        ))}     
                    </div>
                </div>
        </section>
        <section>
            <div className={body.main2}>
                <div className={body.bg}>
                <div className={body.box}>
                    <div className={body.boxbox}>
                        
                        <div className={body.boxxx}>
                            <h3>Senior Drupal Developer</h3>
                            <p>We are looking for a person with energy and a true passion for Drupal, particularly around backend development.</p>
                        </div> 
                        <a href='https://www.digitalgarden.com.au/careers/senior-drupal-developer'><span>SEE AVAILABLE POISITIONS</span></a>

                    </div>
                </div>
                </div>
                <div className={body.box2}>
                    <div className={body.boxbox}>
                        <div className={body.boxxx}>
                            <h3>Launching a new microsite for the Parramatta Aquatic Centre</h3>
                            <p>As the digital partner for the City of Parramatta, Digital Garden was approached to build a microsite for promoting the new centre.</p>
                        </div> 
                       <a href='https://www.digitalgarden.com.au/blog/launching-new-microsite-parramatta-aquatic-centre'><span>READ THE BLOG</span></a> 

                    </div>
                </div>
            </div>
        </section>
            

        <section>
        <div className={body.mainbody3}>
                <div className={body.main3}>
                    <div className={body.mainbox1}><h3>Clients we've worked with</h3></div>
                    <div className={body.mainbox2}>
                        <span className={body.firsttext}>Some of Australia's biggest names.</span>
                        <span className={body.secondtext}>Digital Garden has worked with clients across every sector in corporate, government and not-for-profit.</span>
                    </div>
                     <div className={body.mainbox3}>
                        {logoimgs.map((data)=>(
                        <div className={body.img}>
                            <img src={data.img} alt=''/>
                        </div>
                        ))}
                    </div>
                    <div className={body.btnbox}><a href='https://www.digitalgarden.com.au/clients'><button>View more</button></a></div>

                </div>
               
            </div>
        </section>

        <section>
            <div className={body.main4}>
                <div className={body.main4main}>
                    <span>We'd love to work with you.</span>
                    <div className={body.btnbox}> <a href='https://www.digitalgarden.com.au/contact'><button>SAY HELLO</button></a></div>
                    </div>
            </div>
        </section>
    </div>
  )
}
