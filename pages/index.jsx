import Dropzone from '@/components/Dropzone'
import Navbar from '@/components/Navbar'

const Homepage = () => {
  return (
    <section className='section'>
      <div className='container'>
        <Navbar className='p-16 border border-neutral-200' />
        <div className="flex flex-row">
          <div className="flex flex-col mt-10 ml-10">
            <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
            <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
            <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
          </div>
          <div className="flex flex-col mt-10 w-1/4">
          <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
          <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
          <img src="/cat.jpg" alt="Description of the first image" className="w-48 h-48" />
          </div>
          <div className="w-1/2">
            <h1 className='text-3xl font-bold text-center mt-10'>Video Background Remover</h1>
            <p className="text-lg text-center mt-4">Remove the background of your video online, for free.</p>
            <Dropzone className='p-12 mt-4 mx-32 border border-neutral-200 bg-gray-50' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage