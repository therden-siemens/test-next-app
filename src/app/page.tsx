import Image from 'next/image'
import NavBar from './NavBar'
import Link from 'next/link'

export default function Home() {
  return (

    <div className="h-dvh bg-gradient-to-r from-violet-500 to-fuchsia-500">
      
      <NavBar></NavBar>



          <div className="flex justify-center rounded-lg min-fit drop-shadow-xl bg-base-300 m-20">
            <div className="text-center p-10">
              <div className="max-w-md">
                <h1 className="text-5xl font-serif font-bold">hej.</h1>
                <p className="py-6">DædalOS is your personal operating system. It helps you to manage your daily activities and achieve your goals. You can use it for keeping notes, to set and track your goals, to plan projects and so much more.</p>
                 <Link href="/notes" className="btn btn-primary drawer-button">Start by creating your first note</Link>
              </div>
            </div>
          </div>

        
    </div>
        
  )
}
