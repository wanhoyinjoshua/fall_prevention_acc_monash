import React from 'react'

const Divider = () => {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-2 text-sm text-gray-500">Next item</span>
      </div>
    </div>
  )
}

export default Divider