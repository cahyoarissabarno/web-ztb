import Link from 'next/link'
import Image from 'next/image'

export default function ProductList(props) {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 gap-px my-2">
        {props.product.map((val, i)=>{
            return (
                <Link key={i} href={val.link}>
                    <div className="max-w-xs mx-auto overflow-hidden bg-white outline outline-1 outline-gray-200">
                        <div className='object-cover m-5 h-56 relative'>
                            <Image layout='fill' objectFit='cover' src={`${val.image}`} />
                        </div>
                        <div className="pb-5 px-5">
                            <a href="#" className="block text-gray-900 md:text-base text-sm font-medium">{val.title}</a>
                            <span className="mt-1 md:text-base text-sm font-bold text-yellow-500">Rp. {val.price}</span>
                        </div>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}