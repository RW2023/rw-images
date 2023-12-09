//src/app/page.tsx
import Heading from '@/components/ui/Heading'

export default function Home() {
  return (
    <div className='container flex flex-col flex-grow h-screen'>
      <Heading  title='home page' iconClass='fas fa-home'/>
    </div>
  )
}
