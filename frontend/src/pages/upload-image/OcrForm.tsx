import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { uploadFileOcr } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

const OcrForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { mutate, data, isPending } = useMutation({
    mutationFn: uploadFileOcr,
    onSuccess: () => {
      toast.success('File uploaded successfully')
    },
    onError: (error: Error) => {
      toast.error(`Error uploading file, ${error.message}`)
    }
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
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
          <Label htmlFor='file'>OCR</Label>
          <Input
            id='file'
            type='file'
            onChange={handleOnChange}
          />
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

export default OcrForm
