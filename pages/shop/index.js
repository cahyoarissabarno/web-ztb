import CategoryList from '../../components/ecommerce/Category'
import NavbarEcommerce from '../../components/ecommerce/Navbar'
import ProductList from '../../components/ecommerce/ProductList'
import Carousel from '../../components/ecommerce/Carousel'
import Link from 'next/link'

export default function HomeShop() {
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '#'},
    {title: 'About', link: '#'},
  ]

  const product = [
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Ini Nama Barang Yang Mau Dijual', link: '/shop/product', price: 100000, image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  ]

  const categories = [
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
    {title: 'Sepatu Pria', image: 'https://lzd-img-global.slatic.net/g/p/6a4e76161d0e442958e3b5d92c4d684f.jpg_80x80q80.jpg_.webp'},
  ]

  return (
    <>
      <NavbarEcommerce menu={menu}/>
      <Carousel/>
      <div className='my-5'>
        <div className='bg-gray-800 p-3'>
          <div className="container mx-auto my-5 bg-white py-3 px-5 rounded-xl">
            <h4 className="text-2xl font-bold">Kategori Produk</h4>
            <CategoryList categories={categories}/>
          </div>
        </div>
        <div className="container mx-auto my-5">
          <h4 className="text-2xl font-bold">Semua Produk</h4>
          <ProductList product={product}/>
        </div>
      </div>
    </>
  )
}