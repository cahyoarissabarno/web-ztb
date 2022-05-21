
export default function ProductList(props) {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 gap-px my-2">
        {props.product.map((val, i)=>{
            return (
                <div className="max-w-xs mx-auto overflow-hidden bg-white outline outline-1 outline-gray-200">
                    <img className="object-cover w-full p-5 h-56" src={`${val.image}`} />
                    
                    <div className="pb-5 px-5">
                        <a href="#" className="block text-gray-900 md:text-base text-sm font-medium">{val.title}</a>
                        <span className="mt-1 md:text-base text-sm font-bold text-yellow-500">Rp. {val.price}</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}