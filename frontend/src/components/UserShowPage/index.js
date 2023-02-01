import { fetchUser, getUser } from "../../store/users";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const UserShow = ()=>{
    const {userId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(getUser(userId))

    useEffect(()=>{
        dispatch(fetchUser(userId))
    }, [dispatch, userId])

    if(!user){
        return <LoadingSpinner />;
    }

    return (
        <div className="user-show-page-container">
            <div className="member-header">
                
            </div>
        </div>
    )
}
export default UserShow;