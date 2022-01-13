import "../styling_files/recommendation.scss"

export default function recommendation() {

    const Data = [
        {
            id : "1",
            personimg : "myAssets/person.png",
            name: "Satya Nadella",
            post : "CEO Microsoft",
            linkedin : "",
            twitter : "",
            description : "gv Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vel quae voluptate! Provident, dolorem cum.n",
            prioriyclass :"",
        },
        {
            id : "2",
            personimg : "myAssets/person.png",
            name: "Sundar Pichai",
            post : "CEO Google",
            linkedin : "",
            twitter : "",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vel quae voluptate! Provident, dolorem cum.n",
            prioriyclass :"priority",
        },
        {
            id : "3",
            personimg : "myAssets/person.png",
            name: "Mark Zuckerburg",
            post : "CEO Meta",
            linkedin : "",
            twitter : "",
            description : "Hola, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vel quae voluptate! Provident, dolorem cum.n",
            prioriyclass :"",
        },
    ]

    return (
        <div className="recommendations" id="recommendations">
            <h1>Testimonials</h1>
            <div className="container">
                {Data.map(d => (
                    <div className={"card "+d.prioriyclass}>
                        <div className="upper">
                            <img src="myAssets/linkedin.png" alt="" className="social-icon"/>
                            <img src={d.personimg} alt="" className="person-image"/>
                            <img src="myAssets/twitter (1).png" alt="" className="social-icon"/>
                        </div>
                        <div className="middle">
                            <p>{d.description}</p>
                        </div>
                        <div className="lower">
                            <h3>{d.name}</h3>
                            <h4>{d.post}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
