import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className='p-4 flex flex-col'>
      <h2 className='mb-4'>HomePage</h2>
      <Button asChild>
        <a href='/upload-image'>Upload Image Page</a>
      </Button>
    </div>
  )
}

export default HomePage
