import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import MessageContainer from '../../component/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-loadGetInitialProps overflow-Hidden bg-gray-400 bg-clip-padding backdrop-filter
     backdrop-blur-lg bg-opacity-0 ">
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home