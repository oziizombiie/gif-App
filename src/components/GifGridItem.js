//modo clasico sin usar spread desde el otro lado
// export const GifGridItem = ( {img} ) => {
//     const {title, image} = img;
//     return (
//         <div className="box-border w-64 mb-3 p-2 rounded-t bg-white">
//             <img className="object-fill h-48 w-full" src={image.url}/>
//             <h5 className="mt-3">{title}</h5>    
//         </div>
//     )
// }

export const GifGridItem = ( {title, image} ) => {
    return (
        <div className="box-border shadow-2xl mr-2 w-64 mb-3 p-2 rounded-t bg-white">
            <img className="object-fill h-48 w-full" src={image.url}/>
            <h5 className="mt-3 text-center">{title}</h5>    
        </div>
    )
}