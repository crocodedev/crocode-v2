import { GetServerSideProps } from 'next';
import { fetchGraphQL } from '@/lib/graphql';
import { useRouter } from 'next/router';
import { TArticle } from '@/components/sections/blog-catalog/types';
import { getBlogArticle } from '@/graphql/queries/blog';
import { TSanityError } from '@/types/sanityError';
import { Fragment } from 'react';
import { AuthorArticle, BlogContent, Hero, Subscribe } from '@/components/sections';


type TProps = {
    article: TArticle | null;
    errors: TSanityError[];
}


const MOCK_DATA_WAIT_WHEN_WE_CHANGE_SANITY = {
    title: 'THIS IS EXAMPLE OF TITLE',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatibus exercitationem ullam magni perspiciatis ratione sed illum? Minima commodi aliquam at esse architecto et, vitae harum, sint nostrum perferendis impedit?'
}
const ArticlePage = ({ article, errors }: TProps) => {
    const router = useRouter();

    console.log(article)

    if (errors) {
        return <div>Error {errors[0].message}</div>;
    }

    if (router.isFallback) return <div>Loading...</div>;

    if (!article) return <div>Not found</div>;

    return (
        <Fragment>
            <Hero title={article.title} modelsIsShow={true} />
            <AuthorArticle text={article.author} />
            <BlogContent article={article} />
            <Subscribe />
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (context) => {
    const slug = context.params?.slug;

    const query = getBlogArticle(slug as string);

    const { data, errors } = await fetchGraphQL(query);

    const article = data?.allArticlesItem?.[0];


    return {
        props: {
            article: article ?? null,
            errors: errors ?? null
        },
    };
}) satisfies GetServerSideProps<TProps>;

export default ArticlePage;