import './index.css'

const ThumbnailItem = props  =>{
    const {imageDetails,isActive,setActiveThumbnailId} = props 
    const {thumbnailUrl,thumbnailAltText,id} = imageDetails 
    const thumbnailClassName = isActive ? `thumbnail active`: `thumbnail`
    
    const onClickThumbnail = () =>{
        setActiveThumbnailId(id)
    }

    return (
        <li className = "thumbnails-list-items">
            <button className = "thumbnail-button"
            type = "button"
            onClick = {onClickThumbnail}
            >
                <img src = {thumbnailUrl}
               alt={thumbnailAltText}
               className={thumbnailClassName}
               />
            </button>
        </li>
    )
}


export default ThumbnailItem
