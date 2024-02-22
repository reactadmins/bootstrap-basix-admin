import React from 'react'

function CodePreview({children, title = "Result"}) {
  return (
    <div className='code-preview'>
        <h4 className='code-preview-title'>{title}</h4>
        <div className='preview'>{children}</div>
    </div>
  )
}

export default CodePreview
