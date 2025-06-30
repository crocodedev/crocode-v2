import { SectionLayout } from '@/components/sections';
import styles from './styles.module.scss'


type TProps = {
    text: string;
}

const AuthorArticle = ({ text }: TProps) => {
    return (
        <SectionLayout className={styles.author__wrapper}>
            <span className={styles.author}>{text}</span>
        </SectionLayout>
    )
}


export default AuthorArticle;