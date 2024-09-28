import { useEffect } from "react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


const Nav = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handelToggleThems = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    return (
        <div className="shadow-lg">
            <div className="navbar bg-base-100 justify-between  lg:px-4">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost lg:text-2xl text-4xl gap-0 text-secondary font-bold">Byte<span className="text-primary">Blaze</span></Link>
                </div>
                <div className="">
                    <ul className="menu md:menu-horizontal px-1">
                        <li className="font-bold"><NavLink to='/' className={({isActive,isPending})=>isPending ? 'pending' : isActive ? 'text-purple-500' : ''}>Home</NavLink></li>
                        <li className="font-bold"><NavLink className={({isActive,isPending})=>isPending ? 'pending' : isActive ? 'text-purple-500' : ''} to='/blogs'>Blogs</NavLink></li>
                        <li className="font-bold"><NavLink className={({isActive,isPending})=>isPending ? 'pending' : isActive ? 'text-purple-500' : ''} to='/bookmarks'>Bookmarks</NavLink></li>
                        
                    </ul>
                    <label className="grid cursor-pointer place-items-center">
                        <input
                            type="checkbox"
                            onChange={handelToggleThems}
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Nav