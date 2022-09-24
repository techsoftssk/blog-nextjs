import ArticleCard from "../../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { useRouter } from "next/router";
import { PageLayout } from "../../src/components";

const Categories = () => {
    const router = useRouter()
    const { category } = router.query;
    const categoryArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.category === category);
    const articles = category ? categoryArticles : SORTED_ARTICLES_BY_DATE;    

    return (
        <PageLayout home>
            <div className={"container mt-10 pt-5 md:pt-0"}>
                {
                    category ?
                        <h1 className='px-2 mb-[30px] text-[45px] font-bold mt-8' style={{ textTransform: 'capitalize' }}>
                            {category}
                            <hr className='mt-[10px]' />
                        </h1> : null
                }

                <div className='flex flex-wrap'>
                    {
                        articles.map((each, i) => (
                            <ArticleCard article={each.preview} path={each.path} key={i} />
                        ))
                    }
                </div>
            </div>
        </PageLayout>
    )
}

export default Categories