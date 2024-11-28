import React, {useState} from "react"
import {HiOutlineFaceSmile} from "react-icons/hi2"
import {GrAttachment} from "react-icons/gr"
import {IoIosSend} from "react-icons/io"

const SendMessageFooter = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const [validFiles, setValidFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const validFilesArray = checkFileType(files)
      setValidFiles(validFilesArray)
      setSelectedFiles(files)
      console.log(validFilesArray)
    }
  }

  const checkFileType = (files: FileList): File[] => {
    return Array.from(files).filter((file) => {
      const fileType = file.type
      return (
        fileType.startsWith("image/") ||
        fileType === "application/pdf" ||
        fileType === "application/msword" ||
        fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    })
  }

  console.log({validFiles})
  console.log({selectedFiles})

  return (
    <>
      <div className='flex flex-col justify-center h-[10vh] z-20 items-center'>
        <div className='flex items-center gap-2 w-11/12 mx-auto'>
          <div className='bg-primary rounded-3xl p-4 w-11/12 mx-auto flex items-center gap-3'>
            <HiOutlineFaceSmile size={35} color='#000' className='cursor-pointer' />
            <input type='text' className='p-2 px-4 border-none bg-transparent outline-none flex-grow text-black' placeholder='Enter your message' />
            <input type='file' multiple className='hidden' id='file-upload' onChange={handleFileChange} />
            <label htmlFor='file-upload'>
              <GrAttachment size={28} color='#000' className='cursor-pointer' />
            </label>{" "}
          </div>

          <div className='w-auto h-auto bg-green-500 rounded-full p-2 '>
            <IoIosSend size={28} color='#fff' className='cursor-pointer' />
          </div>
        </div>
      </div>
      {selectedFiles && (
        <div className='absolute bottom-[10%] left-0 right-0 bg-gray-50 h-1/4 w-full mx-auto shadow-md rounded-t-3xl'>
          <div className=''></div>
        </div>
      )}
    </>
  )
}

export default SendMessageFooter
