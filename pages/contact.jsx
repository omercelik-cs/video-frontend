import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <section className='section'>
      <div className='container'>
        <Navbar className='p-16 mt-10 border border-neutral-200' />
        <h1 className='text-3xl mt-10 font-bold text-center'>Contact Us</h1>
        <p className="text-lg text-center mt-4">Please send an email to <a href="mailto:contact@luminous.ai"><u>contact@luminous.ai</u></a> to use our solutions without any limits.</p>
      </div>
    </section>
  )
}

export default About
