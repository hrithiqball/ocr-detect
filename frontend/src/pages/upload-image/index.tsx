import DetectForm from './DetectForm'
import OcrForm from './OcrForm'

const UploadImagePage = () => {
  return (
    <div className='p-4'>
      <h1>Upload Image Page</h1>
      <OcrForm />
      <DetectForm />
    </div>
  )
}

export default UploadImagePage
