

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl gap-0 text-secondary font-bold">Byte<span className="text-primary">Blaze</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold"><a>Home</a></li>
                        <li className="font-bold text-primary"><a>Blogs</a></li>
                        <li className="font-bold"><a>Bookmarks</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav