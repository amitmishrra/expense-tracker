import Header from "./Pages/Navbar"

const CommonContainer = ({children}) =>{
return(
    <>
    <Header/>
    {children}
    </>
)
}

export default CommonContainer