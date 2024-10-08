"use client";

import { UploadButton } from "@uploadthing/react";

export default function UploaderButton({ ep }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UploadButton
                endpoint={ep}
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}
