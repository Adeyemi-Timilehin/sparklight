export default function Avatar({img,imgSrc,imgr}){
    return(
        <>
        <img src={img} className="img" alt="" />
        <img src={imgSrc} className="img" alt="" />
        <img src={imgr} className="img" alt="" />
    </>
    )
}
