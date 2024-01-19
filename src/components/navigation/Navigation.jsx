import Links from './links/Links'

// Style import
import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          Koral Digital
        </div>
        <div>
            <Links />
        </div>
    </div>
  )
}
