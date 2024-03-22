import { useState } from "react";
import cardData from "../cardInform.js"
import Card from "./Card.jsx";

export default function Cardbox() {
    const [data] = useState(cardData);
    return(
        <div className="card-grid">
            {
                data.map((a)=> 
                    <div className="card-background">
                        <Card data={a} />
                    </div>
                )
            }
        </div>
    );
}