import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { uploadFileDetect } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const DetectForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [rgbColor, setRgbColor] = useState('')

  const { mutate, data, isPending } = useMutation({
    mutationFn: uploadFileDetect,
    onSuccess: () => {
      toast.success('File uploaded successfully')
    },
    onError: (error: Error) => {
      toast.error(`Error uploading file, ${error.message}`)
    }
  })

  useEffect(() => {
    if (!data) {
      return
    }

    const rgbString = `rgb(${data.color.join(',')})`

    setRgbColor(rgbString)
  }, [data])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])

      const objectUrl = URL.createObjectURL(e.target.files[0])
      setPreviewUrl(objectUrl)
    }
  }
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
      toast.error('No file selected')
      return
    }

    mutate(selectedFile)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='file'>Detect</Label>
          <Input
            id='file'
            type='file'
            onChange={handleOnChange}
          />

          {previewUrl && (
            <div className='mt-4'>
              <img
                src={previewUrl}
                alt='Preview'
                className='w-full h-auto'
              />
            </div>
          )}

          {data && (
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: rgbColor,
                border: '1px solid #000'
              }}
            ></div>
          )}

          <Button
            loading={isPending}
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default DetectForm
