import Input from "../Input"

export default function Form({onSubmit}){
    const safeSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        const name = e.target[0].value
        const email = e.target[1].value
        onSubmit({name , email})
    }
    return(
       <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-16 mx-5 ">
        <input  type="text" required className="alura-input" placeholder="Insira seu nome..."/>
        <input type="email" required className="alura-input" placeholder="Insira seu e-mail..."/>
        <button type="submit" className="alura-button">Seguir</button>
       </form>
    )
}