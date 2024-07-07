import picProfile from './assets/kaleemullah.jpg'

function Card(){
    return(
        <div className="card">
                <img className="image" src={picProfile} alt="" />
                <h2 className='card-title'>Kaleemullah</h2>
                <p className='card-para'>I am a passionate front end developer and making a website</p>
        </div>
    );
}

export default Card;