import './testimonials.scss'

const Testimonials = () => {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((datum) => (
                    <div className={datum.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className="left" src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/right-arrow.png" alt="arrow" />
                            <img className="people" src={datum.img} alt="man" />
                            <img className="right" src={datum.icon} alt="youtube" />
                        </div>
                        <div className="center">
                            {datum.desc}
                        </div>
                        <div className="bottom">
                            <h3>{datum.name}</h3>
                            <h4>{datum.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
