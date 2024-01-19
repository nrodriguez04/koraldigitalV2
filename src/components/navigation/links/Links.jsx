import Link from 'next/link'

// Style import
import styles from './links.module.css'

// Component imports
import NavLink from './navLink/NavLink'

const Links = () => {
    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Services',
            path: '/services',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Blog',
            path: '/blog',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
    ]

    // Temp variables
    const user = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link}key={link.title}/>
            )))}
            {user ? (
                        <>
                            {isAdmin && <NavLink item={{title: 'Dashboard', path: '/dashboard'}}/>}
                            <button>Logout</button>
                        </>
                    ) : (
                            <NavLink item={{title: 'Login', path: '/login'}}/>
                        )
                }
        </div>
    )
}

export default Links