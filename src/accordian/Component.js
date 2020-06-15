import React from 'react'

function Component(props) {
  return (
    <>
      <h1>
        Accordian App{' '}
        {props.topic === 'javascript' ? (
          <p>
            JavaScript was initially created to “make web
            pages alive”.
          </p>
        ) : props.topic === 'node' ? (
          <p>Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. </p>
        ) : props.topic === 'html' ? (
          <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
        ) : (
          ''
        )}
      </h1>
    </>
  )
}

export default Component
