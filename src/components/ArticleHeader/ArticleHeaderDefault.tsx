import Link from "next/link"
import { generateRandomAvtar } from "../../constants/appConstants"
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils"
import classes from './ArticleHeader.module.scss'
interface IProps {
    headerData: IArticleHeaderData
}
const ArticleHeaderDefault = ({ headerData }: IProps) => {
    return (
        <div className="mb-[30px]">
            <div className="mb-[10px] flex items-center mt-[15px]">
                <div className={classes.article_header_author_img}>
                {headerData.author.profilePic ? <img src={headerData.author.profilePic} alt={headerData.author.name} /> : <img src={generateRandomAvtar()} alt={headerData.author.name} /> }
                </div>
                <div>
                    <div className="flex text-[16px] md:text-lg items-center">
                        <p className={combineClasses(classes.article_header_author_name, 'font-medium my-0')}>
                            {headerData.author.name}
                        </p>
                        {
                            headerData.category && <>
                                <p className="px-2 dark:text-gray-400 text-gray-500 my-0">in</p>
                                <p className="font-medium my-0">
                                    <Link href={"/blog?category=" + headerData.category} passHref={true}>
                                        {headerData.category}
                                    </Link>
                                </p>
                            </>
                        }
                    </div>
                    <p className="text-xs dark:text-gray-400 text-gray-500 my-0 mt-1">{headerData.date}</p>
                </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold mt-[20px] mb-[5px]">
                {headerData.articleTitle}
            </h1>
            <div>
                {
                    headerData.tags.split(',').map((each, i) => (
                        <span key={i} className="text-xs font-regular dark:text-gray-400 text-gray-500 mr-[10px]" >#{each}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleHeaderDefault