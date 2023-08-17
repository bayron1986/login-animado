import "../components/Home.css"
// eslint-disable-next-line react/prop-types
export function Home ({user, setUser}) {
    const handleLogout = ()=> {
        setUser([])
    }
return(
    <div className="Home">
       <h1 className="bounce-in-top"> bienvenido</h1>
       <h2 className="bounce-in-top2">{user}</h2>
       <button className="flicker-in-2 " onClick={handleLogout}>Cerrar sesion</button>
    </div>
)
}