import "./property.css"
export default function Property({array}) {
    return (
            <div className="div">
                {array.map((arr)=>
                <div key={arr.id} className="child-div"> 
                 <p>{arr.name}</p>
                 <p>${arr.price} a night</p>
                 <p>{arr.rating} ⭐️</p>
                </div>
                 )}
            </div>
    )
}