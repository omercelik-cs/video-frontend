import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Dropzone = ({ className }) => {
  const [filename, setFilename] = useState(null);

  const getVideoMetadata = (file) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        const metadata = {
          duration: video.duration,
          dimensions: {
            width: video.videoWidth,
            height: video.videoHeight
          },
          src: URL.createObjectURL(file)
        };
        resolve(metadata);
      };
      video.onerror = reject;
      video.src = URL.createObjectURL(file);
    });
  };

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length !== 1) {
      alert("Error: Only one file can be dropped at a time");
      return;
    } else {
      if (acceptedFiles[0].type !== 'video/mp4' && acceptedFiles[0].type !== 'video/quicktime') {
        alert("Error: Accepted file types are mp4 and mov, this is " + acceptedFiles[0].type);
        return;
      }
      else{
        const fileSizeLimit = 10 * 1024 * 1024; // 10MB
        getVideoMetadata(acceptedFiles[0]).then(metadata => {
          console.log(metadata);
          setFilename(acceptedFiles[0].name);
        });
        if (acceptedFiles[0].size > fileSizeLimit) {
          alert("Error: File size exceeds the limit of 10MB");
          return;
        }
      }

    }
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const handleSubmit = (e) => {}

  return (
    <form onSubmit={handleSubmit}>
      <div
        {...getRootProps({
          className: className
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-right gap-4'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop your video here, or click to select</p>
          )}
        </div>
      </div>
      {filename && (
        <div class="flex flex-col items-center">
          <div className="border border-gray-300 rounded-lg p-4 mt-4 w-1/2 mx-auto float-left text-center flex justify-between items-center">
            <p className="text-sm text-gray-700">Chosen file: <strong>{filename}</strong></p>
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {setFilename(null)}}
            >
              X
            </button>
          </div>
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded mt-4"
            onClick={handleSubmit}
          >
            Start
          </button>
        </div>
      )}
    </form>
  );
}
export default Dropzone
