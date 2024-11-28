"use client"

import React, {useCallback, useState} from "react"
import {HiOutlineFaceSmile} from "react-icons/hi2"
import {GrAttachment} from "react-icons/gr"
import {IoIosSend} from "react-icons/io"
import Image from "next/image"
import {formatFileSize} from "@/utils"
import PDFImage from "@/assets/svgs/pdf.svg"
import DocxImage from "@/assets/svgs/doc-file.svg"
import OtherFilemage from "@/assets/svgs/all-docx.svg"
import {IoClose, IoCloseCircleOutline} from "react-icons/io5"

const SendMessageFooter = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null)

  console.log({selectedFiles})

  const checkFileType = (file: File): string => {
    const fileType = file.type
    if (fileType.startsWith("image/")) return "image"
    if (fileType === "application/pdf") return "pdf"
    if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") return "docx"
    return "unknown"
  }

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const filesList = e.target.files as FileList
    console.log("filesList", filesList)
    const files = []
    for (let i = 0; i < filesList.length; i++) {
      files.push(filesList[i])
    }
    setSelectedFiles(files)
  }, [])

  const handleFileDeletion = useCallback(
    (index: number) => {
      if (selectedFiles) {
        const newFiles = selectedFiles.filter((_, i) => i !== index)
        setSelectedFiles(newFiles.length > 0 ? newFiles : null)
      }
    },
    [selectedFiles]
  )

  return (
    <>
      <div className='flex flex-col justify-center h-[14vh] xl:h-[12vh] 2xl:h-[10vh] z-20 items-center'>
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
        <div className='absolute bottom-[14%] xl:bottom-[10%] left-0 right-0 bg-blue-50 h-1/4 w-full mx-auto rounded-t-3xl'>
          <div className='flex items-center gap-4 w-full overflow-x-scroll '>
            {selectedFiles.map((file, idx) => (
              <div key={idx} className='w-fit p-3 border border-gray-100 rounded-md flex items-center justify-between gap-2'>
                <div className='w-fit flex flex-col border border-gray-100 gap-2 rounded-3xl p-4 shadow-sm bg-white relative'>
                  <Image
                    src={
                      checkFileType(file) === "image"
                        ? URL.createObjectURL(file)
                        : checkFileType(file) === "pdf"
                        ? PDFImage
                        : checkFileType(file) === "docx"
                        ? DocxImage
                        : OtherFilemage
                    }
                    alt=''
                    className='w-20 h-20 object-cover'
                    width={100}
                    height={100}
                  />
                  <div className='flex flex-col gap-1 text-sm'>
                    <h3 className='text-gray-700 font-medium line-clamp-1 w-[100px]'>{file.name}</h3>
                    <span className='text-gray-600'>{formatFileSize(file.size)}</span>
                  </div>
                  <div className='absolute top-0 right-0'>
                    <IoCloseCircleOutline size={24} color='#777' onClick={() => handleFileDeletion(idx)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SendMessageFooter
