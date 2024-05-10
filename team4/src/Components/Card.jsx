export default function Card({ data }) {
    return(
        <>
            <img className="card-userpic" src={ data.img }/>
            <div className="card-inform">
                <img src="/Angle.png" />
                <p>{ data.name }</p>
                <p>{ data.job }</p>
                <p>{ data.inform }</p>
                <div className="card-twitter">
                    <img src="Twitter.png" />
                    <p>{ data.twiterId }</p>
                </div>
            </div>
        </>
    );
}