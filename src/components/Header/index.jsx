import ToggleTheme from '../ToggleTheme'

export default function Header({user }) {
    return(
        <div className="flex  h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl">
            <span className="text-gray-100">Olá, {user?.name || "usuário"}</span>
            <h1 >Alura Newsletter</h1>
            <ToggleTheme/>
        </div>
    )
}