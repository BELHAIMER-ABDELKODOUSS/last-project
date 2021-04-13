const number1 = document.querySelector('.num1');
const h2text1 = document.querySelector('.h2text1');
const h4text1 = document.querySelector('.h4text1');
const number2 = document.querySelector('.num2');
const h2text2 = document.querySelector('.h2text2');
const h4text2 = document.querySelector('.h4text2');
const number3 = document.querySelector('.num3');
const h2text3 = document.querySelector('.h2text3');
const h4text3 = document.querySelector('.h4text3');
const line1 = document.querySelector('.line1-drew');
const line2 = document.querySelector('.line2-drew');
const pat2 = document.querySelector('.pat2');

const transitSection1 = document.querySelector('.transit-section1');
const transitSection2 = document.querySelector('.transit-section2');
const transitSection3 = document.querySelector('.transit-section3');

/* How We Work Animation  first */

let tl = gsap.timeline({ delay: 0.5, yoyo: true })

var startCount = 1,
    num = { var: startCount }, num2 = { var: startCount }, num3 = { var: startCount };

/* How We Work Animation  second */

const CubParts = document.querySelector('#cubeParts');
CubParts.addEventListener('load', function ()
{
    let tl = gsap.timeline({ delay: 0.5, yoyo: true })
    const elemnt = CubParts.contentDocument;
    const circle = elemnt.querySelector('#Ellipse');
    const cubeTop = elemnt.querySelector('#cubeTop');
    const cubeBottom = elemnt.querySelector('#cubeBottom');
    const cubeWhole = elemnt.querySelector('#cubeWhole');
    const cubeWholeLInes = elemnt.querySelector('#cubeWholeLInes');
    tl.to(circle, {
        scrollTrigger: {
            trigger: 'body',
            scrub: true,
            start: '0% top',
            end: '50% top',
            onUpdate: (e) =>
            {
                // console.log('hello')
            }

        }, y: -140, ease: 'none', duration: 10
    }).to(cubeTop, {
         scrollTrigger: {
            trigger: 'body',
            scrub: true,
            start: '0% top',
            end: '50% top',
            
            onUpdate: (e) =>
            {
                // console.log('hello')
            }

        }, y: 119, ease: 'none', duration: 10
    }).to(cubeBottom, {
         scrollTrigger: {
            trigger: 'body',
            scrub: true,
            start: '0% top',
            end: '50% top',
            
            onUpdate: (e) =>
            {
                // console.log('hello')
            }

        }, y: 107, ease: 'none', duration: 10
    }).to(cubeWhole, {
         scrollTrigger: {
            trigger: 'body',
            scrub: true,
            start: '0% top',
            end: '50% top',
            
            onUpdate: (e) =>
            {
                // console.log('hello')
            }

        }, y: 520, ease: 'none', duration: 10
    }).to(cubeWholeLInes, {
         scrollTrigger: {
            trigger: 'body',
            scrub: true,
            start: '0% top',
            end: '50% top',
            
            onUpdate: (e) =>
            {
                // console.log('hello')
            },
            onLeave: (e) =>
            {
                 document.querySelector('.border-top-left').style.opacity = '1';
            },
            onEnterBack: (e) =>
            {
                document.querySelector('.border-top-left').style.opacity = '0';
            }
            
        }, y: 520, ease: 'none', duration: 10
    })
});

/* Scroll bar animation */
const POT2Svg = document.querySelector('.POT2-svg');

POT2Svg.addEventListener('load', function () {
    // POT2Svg.data = POT2Svg.data;
    const elemntelast = POT2Svg.contentDocument;
    // console.log(elemntelast)
    const POT2 = elemntelast.getElementsByClassName('POT2');
    // console.log(POT2[0].getTotalLength(), 'pot2');
    // POT2[0].style.strokeDasharray = '796';
    // POT2[0].style.strokeDashoffset = '796';

    ScrollTrigger.create({
        trigger: '.animation-bottom',
        start: '0% bottom',
        end: '10% end',
        // // ,
        onUpdate: (e) => {
            const pathCircles = elemntelast.querySelectorAll('.path-circles');
            const progress = e.progress * 100;
            POT2[0].style.strokeDashoffset = '796';
            const l = (progress * 7.8);
            //POT2[0].style.strokeDashoffset = `${POT2[0].style.strokeDashoffset - l}`;
            if (pathCircles) {
                var fir = randomIntFromInterval(1, 15);
                var sec = randomIntFromInterval(1, 15);

                pathCircles[fir].style.fill = 'none';
                pathCircles[sec].style.fill = 'white';
            }
        }
    });
});

const POT1Svg = document.querySelector('.POT1-svg');

POT1Svg.addEventListener('load', function () {
    const elemntePOT = POT1Svg.contentDocument;

    const POT1 = elemntePOT.getElementsByClassName('POT1');
    // console.log(POT1[0].getTotalLength(), 'pot1');

    ScrollTrigger.create({
        trigger: '.desktop-view',
        start: '0% bottom',
        end: '10% end',
        // //,
        onUpdate: (e) => {
            const pathCircles = elemntePOT.querySelectorAll('.path-circles');
            const progress = e.progress * 100;
            POT1[0].style.strokeDashoffset = '960';
            const l = (progress * 10.4);
            //POT1[0].style.strokeDashoffset = `${POT1[0].style.strokeDashoffset - l}`;
            if (pathCircles) {
                var fir = randomIntFromInterval(1, 17);
                var sec = randomIntFromInterval(1, 17);

                pathCircles[fir].style.fill = 'none';
                pathCircles[sec].style.fill = 'white';
            }
        }
    });
});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const POTSvg4 = document.querySelector('.POT4-svg');

POTSvg4.addEventListener('load', function () {
    const el = POTSvg4.contentDocument;
    // const svgdoclast = elemntelast.getElementsByClassName('svg-pad');

    const POT4 = el.getElementsByClassName('POT4');
    //console.log(POT4[0].getTotalLength(), 'POT 4');
    POT4[0].style.strokeDasharray = '493';
    POT4[0].style.strokeDashoffset = '493';

    ScrollTrigger.create({
        trigger: '.animation-bottom',
        start: '-20% center',
        end: '140% center',
        // //,
        onUpdate: (e) => {
            const pathCircles = el.querySelectorAll('.path-circles');

            const progress = e.progress * 100;
            POT4[0].style.strokeDashoffset = '493';
            const l = (progress * 4.8);
            //POT4[0].style.strokeDashoffset = `${POT4[0].style.strokeDashoffset - l}`;
            //console.log(l)
            //console.log(POT4[0].style.strokeDashoffset)
            if (pathCircles) {
                var fir = randomIntFromInterval(1, 9);
                var sec = randomIntFromInterval(1, 9);
                pathCircles[fir].style.fill = 'none';
                pathCircles[sec].style.fill = 'white';
            }
        }
    });
});
const POTSvg3 = document.querySelector('.POT3-svg');

POTSvg3.addEventListener('load', function () {

    const ele = POTSvg3.contentDocument;
    // const svgdoclast = elemntelast.getElementsByClassName('svg-pad');
    const POT3 = ele.getElementsByClassName('POT3');
    //console.log(POT3[0].getTotalLength(), 'POT 3');
    POT3[0].style.strokeDasharray = '960';
    POT3[0].style.strokeDashoffset = '960';

    ScrollTrigger.create({
        trigger: '.animation-top',
        start: '-50% center',
        end: '80% center',
        // // ,
        onUpdate: (e) => {
            const pathCircles = ele.querySelectorAll('.path-circles');
            const progress = e.progress * 100;
            POT3[0].style.strokeDashoffset = '960';
            const l = (progress * 9.4);
            //POT3[0].style.strokeDashoffset = `${POT3[0].style.strokeDashoffset - l}`;
            //console.log(l)
            //console.log(POT3[0].style.strokeDashoffset)
            if (pathCircles) {
                var fir = randomIntFromInterval(1, 17);
                var sec = randomIntFromInterval(1, 17);

                pathCircles[fir].style.fill = 'none';
                pathCircles[sec].style.fill = 'white';
            }
        }
    });
});
const POTSvg5 = document.querySelector('.POT5-svg');

POTSvg5.addEventListener('load', function () {
    const elee = POTSvg5.contentDocument;
    const POT5 = elee.getElementsByClassName('POT5');
    //console.log(POT5[0].getTotalLength(), 'POT 5 ');
    POT5[0].style.strokeDasharray = '125';
    POT5[0].style.strokeDashoffset = '125';

    ScrollTrigger.create({
        trigger: '.animation-top',
        start: '10% center',
        end: '40% center',
        // // ,
        onUpdate: (e) => {
            const progress = e.progress * 100;
            POT5[0].style.strokeDashoffset = '125';
            const l = (progress * 1.4);
            POT5[0].style.strokeDashoffset = `${POT5[0].style.strokeDashoffset - l}`;
        }
    });
});
const POTSvg6 = document.querySelector('.POT6-svg');

POTSvg6.addEventListener('load', function () {
    const eleepl = POTSvg6.contentDocument;
    const POT6 = eleepl.getElementsByClassName('POT6');
    //console.log(POT6[0].getTotalLength(), 'POT 5 ');
    POT6[0].style.strokeDasharray = '333';
    POT6[0].style.strokeDashoffset = '333';

    ScrollTrigger.create({
        trigger: '.animation-top',
        start: '80% center',
        end: '180% center',
        // // ,
        onUpdate: (e) => {
            const progress = e.progress * 100;
            POT6[0].style.strokeDashoffset = '333';
            const l = (progress * 3.4);
            POT6[0].style.strokeDashoffset = `${POT6[0].style.strokeDashoffset - l}`;
        }
    });
});

gsap.to('#scID1 .right_box .content', {
     scrollTrigger: {
        trigger: '#scID1',
        start: '5% center',
        end: '50% center',
        scrub: true,
        // markers:true,
        onEnter: (e) =>
        {
            // document.querySelector('#scID1 .right_box .content').style.opacity = '1';
           gsap.to(num, {
                 var: 13, duration: 1, ease: "none", onUpdate: (e) =>
                 {
                     document.querySelector('#count-num1').textContent = `${(num.var).toFixed()}`;
                 }
             })
             
        },
        onUpdate: (e) =>
        {
            if (e.direction == 1)
                document.querySelector('#scID1 .right_box .content').style.opacity = '1';
            else
                document.querySelector('#scID1 .right_box .content').style.opacity = '0';
        }
       
        
        
    }
})
gsap.to('#scID2 .right_box .content', {
    scrollTrigger: {
        trigger: '#scID2',
        start: '0% center',
        end: '50% center',
        scrub: true,
         onEnter: (e) =>
        {
             
             gsap.to(num2, {
            var: 15, duration: 1, ease: "none", onUpdate: (e) => {
            document.querySelector('#count-num2').textContent = `${(num2.var).toFixed()}`;
        }
    })
        },
         onUpdate: (e) =>
        {
            if (e.direction == 1)
               document.querySelector('#scID2 .right_box .content').style.opacity = '1';
            else
               document.querySelector('#scID2 .right_box .content').style.opacity = '0';
        }
       
    }
});
gsap.to('#scID3 .right_box .content', {
    scrollTrigger: {
        trigger: '#scID3',
        start: '0% center',
        end: '50% center',
        scrub: true,
        onEnter: (e) =>
        {
           
            gsap.to(num3, {
            var: 4, duration: 1, ease: "none", onUpdate: (e) => {
            document.querySelector('#count-num3').textContent = `${(num3.var).toFixed()}`;
        }
    })
        },
        onUpdate: (e) =>
        {
            if (e.direction == 1)
                document.querySelector('#scID3 .right_box .content').style.opacity = '1';
            else
                document.querySelector('#scID3 .right_box .content').style.opacity = '0';
        }
       
    }
});

const CubParts2 = document.querySelector('#cubeParts2');
CubParts2.addEventListener('load', function ()
{
    let tl = gsap.timeline({ delay: 0.5, yoyo: true })
    const elemnt = CubParts2.contentDocument;
    const circle = elemnt.querySelector('#Ellipse');
    const cubeTop = elemnt.querySelector('#cubeTop');
    const cubeBottom = elemnt.querySelector('#cubeBottom');
    const cubeWhole = elemnt.querySelector('#cubeWhole');
    const cubeWholeLInes = elemnt.querySelector('#cubeWholeLInes');
    const all = elemnt.querySelectorAll('.cls-1');

    all.forEach(element =>
    {
        element.style.transition = 'fill 1s ease-in-out';
    });

    cubeWhole.style.transform = 'translateY(512px)';
    cubeWholeLInes.style.transform = 'translateY(512px)';
    circle.style.transform = 'translateY(-150px)';
    cubeTop.style.transform = 'translateY(109px)';
    cubeBottom.style.transform = 'translateY(100px)';

    tl.to([circle, cubeWhole, cubeWholeLInes, cubeTop, cubeBottom], {
        scrollTrigger: {
            trigger: '.work-content .content.first-content',
            scrub: true,
            start: '0% center',
            end: '50% center',
            
            onUpdate: (e) =>
            {
                const percent = e.progress * 100;
                console.log(percent);
                if (percent >= 68) {
                    // console.log('lofi')
                    circle.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';
                    circle.querySelector('.cls-1').style.filter = 'none';
                    circle.querySelector('.cls-1').style.fill = '#A3AD9F';
                    cubeTop.querySelector('.cls-1').style.fill = '#F4EFBC';
                    cubeBottom.querySelector('.cls-1').style.fill = '#C3E4E9';
                    cubeWhole.querySelector('.cls-1').style.fill = '#EEFAFD';
                }
                else {
                    circle.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
                    cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';
                    circle.querySelector('.cls-1').style.filter = 'none';

                }
            },
            onLeave: (e) =>
            {
                circle.querySelector('.cls-1').style.fill = '#216488';
                cubeTop.querySelector('.cls-1').style.fill = '#E2D44C';
                cubeBottom.querySelector('.cls-1').style.fill = '#078B8F';
                cubeWhole.querySelector('.cls-1').style.fill = '#35A9C0';
                circle.querySelector('.cls-1').style.filter = 'none';
                
            },
            onEnterBack: (e) =>
            {
                circle.querySelector('.cls-1').style.filter = 'none';
                console.log('lofi2')
            }


        }, y: 0, ease: 'none', duration: 10
    
    }).to([circle, cubeWhole, cubeWholeLInes, cubeTop, cubeBottom], {
        scrollTrigger: {
            trigger: '.work-content .content.second-content',
            scrub: true,
            start: '0% center',
            end: '100% center',
            // markers:true,
            onEnter: (e) =>
            {
                circle.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.filter = 'none';
                cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';
                circle.querySelector('.cls-1').style.fill = '#255E96';
                circle.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #255E96)';

            },
            onEnterBack: (e) =>
            {
                cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                circle.querySelector('.cls-1').style.fill = '#255E96';
                cubeTop.querySelector('.cls-1').style.filter = 'none';
                cubeBottom.querySelector('.cls-1').style.filter = 'none';
                cubeWhole.querySelector('.cls-1').style.filter = 'none';
                circle.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #255E96)';

            },
            onLeaveBack: (e) =>
            {
                    circle.querySelector('.cls-1').style.fill = '#216488';
                    cubeTop.querySelector('.cls-1').style.fill = '#E2D44C';
                    cubeBottom.querySelector('.cls-1').style.fill = '#078B8F';
                    cubeWhole.querySelector('.cls-1').style.fill = '#35A9C0';
                    circle.querySelector('.cls-1').style.filter = 'none';
                    console.log('lofi69')
            }
            ,
            onUpdate: (e) =>
            {
                const percent = e.progress * 100;
                console.log(percent);
              
            }
        }
    }).to([circle, cubeWhole, cubeWholeLInes, cubeTop, cubeBottom], {
        scrollTrigger: {
            trigger: '.work-content .content.third-content',
            scrub: true,
            start: '0% center',
            end: '100% center',
            // markers:true,
            onEnter: (e) =>
            {
                circle.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.fill = '#E2D44C';
                cubeTop.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #E1D34C)';
                
            },
            onEnterBack: (e) =>
            {
                cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #E1D34C)';
                cubeTop.querySelector('.cls-1').style.fill = '#E2D44C';
            }
            ,
            onUpdate: (e) =>
            {
                const percent = e.progress * 100;
                console.log(percent);
              
            }
        }
    }).to([circle, cubeWhole, cubeWholeLInes, cubeTop, cubeBottom], {
        scrollTrigger: {
            trigger: '.work-content .content.fourth-content',
            scrub: true,
            start: '0% center',
            end: '100% center',
            // markers:true,
            onEnter: (e) =>
            {
                console.log('enter')
                cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeBottom.querySelector('.cls-1').style.fill = '#0094A0';
                cubeBottom.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #0094A0)';

            },
            onLeave: (e) =>
            {
                // cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
            },
            onEnterBack: (e) =>
            {
                cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';

                cubeBottom.querySelector('.cls-1').style.fill = '#0094A0';
                cubeBottom.querySelector('.cls-1').style.filter = 'drop-shadow( 0px -4px 7px #0094A0)';

            }
            ,
            onUpdate: (e) =>
            {
                const percent = e.progress * 100;
                console.log(percent);
              
            }
        }
    }).to([circle, cubeWhole, cubeWholeLInes, cubeTop, cubeBottom], {
        scrollTrigger: {
            trigger: '.work-content .content.fifth-content',
            scrub: true,
            start: '0% center',
            end: '1000% center',
            onEnter: (e) =>
            {
                cubeBottom.querySelector('.cls-1').style.fill = '#ffffff00';
                cubeTop.querySelector('.cls-1').style.fill = '#ffffff00';
                // cubeWhole.style.order = '1';
                cubeWhole.querySelector('.cls-1').style.fill = '#40BFE4';
                cubeWhole.querySelector('.cls-1').style.filter = 'drop-shadow( 0px 3px 14px #40BFE4)';

            },
            onLeave: (e) =>
            {
                cubeWhole.querySelector('.cls-1').style.fill = '#ffffff00';
            },
            onEnterBack: (e) =>
            {
                cubeWhole.querySelector('.cls-1').style.fill = '#40BFE4';
                cubeWhole.querySelector('.cls-1').style.filter = 'drop-shadow( 0px 3px 14px #40BFE4)';

            }
            ,
            onUpdate: (e) =>
            {
                const percent = e.progress * 100;
                console.log(percent);
              
            }
        }
    })

});

ScrollTrigger.create({
    trigger: '.banner-bottom-content',
    start: '-140% center',
    end: '-140% center',
    // markers:true,
    onEnter: (e) =>
    {
        document.querySelector('.banner-bottom-content').style.opacity = '1';
    },
    onEnterBack: (e) =>
    {
        document.querySelector('.banner-bottom-content').style.opacity = '0';
    }
});
ScrollTrigger.create({
    trigger: '.border-bottom',
    start: '-50% center',
    end: '100% center',
    onEnter: (e) =>
    {
        document.querySelector('.border-bottom').style.opacity = '1';
    },
});