import { useSearchParams } from 'next/navigation';
import React from 'react'

function Page() {

    const searchParams = useSearchParams();
    const editorId = searchParams.get('editorId');

    if (!editorId) {
        return <div>No editor ID found</div>;
    }
    }
    
  return (
    <div>
      <h1>Editor ID: {editorId}</h1>
    </div>
  )
}

export default page
