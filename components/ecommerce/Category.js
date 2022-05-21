
export default function CategoryList(props) {
  return (
    <div className="flex flex-wrap">
        {props.categories.map((val, i)=>{
            return (
                <div className="max-w-xs mx-auto overflow-hidden bg-white">
                    <img className="object-cover w-full p-5 h-28" src={`${val.image}`} />
                    
                    <div className="pb-5 px-5 text-center">
                        <a href="#" className="block text-gray-900 md:text-base text-sm font-medium">{val.title}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}