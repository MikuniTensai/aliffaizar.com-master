import Typewriter from '@/components/TypeWriter'

export default function Hero() {
  return (
    <section
      id='home'
      className='h-[calc(100vh-2rem)] flex flex-col items-center justify-center w-full'
    >
      <div className='flex flex-col items-center justify-center gap-3 w-full md:max-w-2xl lg:max-w-4xl'>
        <div className='flex items-center flex-col gap-2 md:gap-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500'>
            Mochamad Yusuf
          </h1>
          <Typewriter text='Solo Game Development' />
        </div>
        <span className='w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500'></span>
        <p className='text-lg text-center md:text-xl'>
        Highly skilled and meticulous software developer with 2 years experience in designing, developing,
and independently implement enterprise-level applications. Proficient in various programming languages, methodologies
software development, and database management systems. Able to solve problems well and have the ability
effective work in teams
        </p>
        <div className='relative mt-4'>
          <div className='bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 w-44 h-8 md:w-52 md:h-10 lg:w-64 lg:h-12'></div>
          <a
            // href='https://drive.google.com/file/d/1BblJyK6e-DK1hy2Z8bHcxYZX0KLW9aob/view?usp=sharing'
            href=''
            target='_blank'
            className='w-44 h-8 md:w-52 md:h-10 lg:w-64 lg:h-12 bg-white text-gray-900 font-mono text-sm md:text-base lg:text-lg font-bold lg:font-semibold flex items-center justify-center absolute right-1 bottom-1 lg:right-2 lg:bottom-2 hover:right-0 hover:bottom-0'
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
