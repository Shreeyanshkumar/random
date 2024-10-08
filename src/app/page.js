'use client'
import UploaderButton from '@/components/UploaderButton';
import { useState } from 'react'


export default function Home() {

  const [eps, setEps] = useState(['imageUploader', 'pdfUploader'])

  return (
    <>

      <div className="flex items-center gap-x-4 justify-around">
        {eps.map((ep) => <div className="flex flex-col gap-y-2 items-center">
          <UploaderButton ep={ep} />
          <span>
            {ep}
          </span>
        </div>)}
      </div>
    </>
  );
}
