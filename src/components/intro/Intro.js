import {init} from 'ityped'
import {useRef, useEffect} from 'react'
import {ExpandMore} from '@material-ui/icons';
import './intro.scss'

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor : true,
            backDelay : 1500,
            backSpeed : 50,
            strings : ["Web developer", "Software developer", "Web designer"]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="image_container">
                    <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, I'm</h2>
                    <h1>Raju Lama</h1>
                    <h3>
                        Professional <span ref={textRef}></span>
                    </h3>
                </div>
            </div>
            <a href="#portfolio">
                <ExpandMore className="down_arrow" fontSize="large" />
            </a>
        </div>
    )
}

export default Intro
