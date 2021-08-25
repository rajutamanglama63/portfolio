import './menu.scss'

const Menu = ({openMenu, setOpenMenu}) => {
    return (
        <div>
            <div className={"menu " + (openMenu && "active")}>
                <ul>
                    <li onClick={() => setOpenMenu(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <a href="#works">Works</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
