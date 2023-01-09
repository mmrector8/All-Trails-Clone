import * as starcss from "./reviewindexitem.css"
const StarIndex = ({numStars})=>{

    if(numStars === 5){
        return (
            <>
                    <i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1" ></i><i className="active fa fa-star star-rating-1"></i>
            </>
        )
    }else if(numStars === 4){
        return (
            <>
                <i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1" ></i><i className="active fa fa-star star-rating-1"></i>
            </>
        )
       
    } else if(numStars === 3){
        return (
            <>
                <i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1" ></i>
            </>
        )
    }else if(numStars ===2){
        return (
            <>
                <i className="active fa fa-star star-rating-1"></i><i className="active fa fa-star star-rating-1"></i>
            </>
        )
    }else{
        return (
            <>
                <i className="active fa fa-star star-rating-1"></i>
            </>
        )
    }

}

export default StarIndex;