import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'

const Topbar = ({openMenu, setOpenMenu}) => {
    return (
        <div className={"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="item_container">
                        <Person className="icon"/>
                        <span>+977 9862152335</span>
                    </div>
                    <div className="item_container">
                        <Mail className="icon"/>
                        <span>rajutamanglama63@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
