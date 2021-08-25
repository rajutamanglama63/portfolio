import './portfolioList.scss'

const PortfolioList = ({title, id, setSelected, active}) => {
    return (
        <div>
            <li className={active ? "portfolio_list active" : "portfolio_list"} onClick={() => setSelected(id)}>
                {title}
            </li>
        </div>
    )
}

export default PortfolioList
