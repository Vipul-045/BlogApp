import { useblog } from "../hooks"
import { useParams } from "react-router-dom";

export const Eachblog = () => {
    const { id } = useParams();
    const {loading, blog} = useblog({
        id: id || ""
    });

if(loading){
    return <div>
        loading ...done 
    </div>
}

return <div>
        Blog details
    </div>
    
}