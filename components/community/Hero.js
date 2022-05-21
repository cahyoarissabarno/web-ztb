export default function Hero(props) {
  return (
    <>
      <div class="container max-w-none px-14 flex flex-col py-4 mx-auto space-y-6 lg:h-[37.5rem] lg:py-16 lg:flex-row lg:items-center bg-gray-800">
        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo"/>
        </div>
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div class="max-w-lg lg:mx-14 lg:order-2">
                <h1 class="text-3xl font-bold tracking-wide text-gray-300 lg:text-5xl">
                  {props.title}
                </h1>
                <p class="mt-7 text-gray-200">
                  {props.caption}
                </p>
                <div class="mt-8">
                    <a href="#" class="block px-3 py-2 font-semibold text-center text-gray-800 transition-colors duration-200 transform bg-gray-300 rounded-md lg:inline hover:bg-gray-700 hover:text-gray-300">
                      Bergabung dengan kami
                    </a>
                </div>
            </div>
        </div>
    </div>
</>
  )
}