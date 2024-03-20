import { useState } from "react";
import data from "../cardInform.js"

export default function Card() {
    let [inform] = useState(data);
    return(
        <div className="card-grid">
            {
                inform.map((a, i)=> 
                <div className="card-background">
                    <img className="card-userpic" src={ `/Userpic ${i + 1}.png` }/>
                    <div className="card-inform">
                        <img src="/Angle.png" />
                        <p className="card-name">{ inform[i].name }</p>
                        <p className="card-job">{ inform[i].job }</p>
                        <p className="card-explain">
                        { inform[i].inform } </p>
                        <div className="card-twitter">
                            <img src="Twitter.png" />
                            <p className="card-twitter-id">{ inform[i].twiterId }</p>
                        </div>
                    </div>
                    </div>
                )
            }
        </div>
    );
}