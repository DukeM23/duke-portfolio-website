import { Image } from "../../interface/image.inteface"

export default function ImageResponsive({ src, alt, className, breakpoint="sm" }: Image) {

    
    if(className === "") {
        return ( <img src={src} alt={alt} /> )
    } else {
        return <img src={src} alt={alt} className={`${className} `} />;
    }
}