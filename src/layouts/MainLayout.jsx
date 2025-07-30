import { Outlet } from "react-router-dom"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import ChatBotTrigger from "@/components/common/ChatBotTrigger"

const MainLayout = () => {
  return (
    <>  
        <Header />
        <main>
            <Outlet />
        </main>
        <ChatBotTrigger/>
        <Footer />
    </>
  )
}

export default MainLayout