import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <section className='section'>
      <div className='container'>
      <Navbar className='p-16 mt-10 border border-neutral-200' />
        <h1 className='text-3xl mt-10 font-bold text-center'>About Us</h1>
        <p className="text-lg text-center mt-4">We are a team of AI enthusiasts who are passionate about making AI accessible to everyone.</p>
      </div>
    </section>
  )
}

export default About
