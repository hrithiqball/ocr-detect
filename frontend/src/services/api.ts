export const uploadFileOcr = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('http://127.0.0.1:5000/upload/ocr', {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  return response.json()
}

export const uploadFileDetect = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('http://127.0.0.1:5000/upload/detect', {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  return response.json()
}
