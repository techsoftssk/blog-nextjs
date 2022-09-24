import { generateRandomAvtar } from "../../constants/appConstants";
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils";
import LinkTo from "../LinkTo";
import classes from './ArticleCard.module.scss';

const SerachArticleCard = ({ article, path }: { article: IArticleHeaderData, path: string }) => (
  <div className="w-full md:w-1/3 px-3 mb-10">
    <LinkTo href={path} passHref={true}>
      <div className={combineClasses(classes.article_card, "px-[15px] py-[10px] border-b-[5px] border-blue-600 dark:bg-slate-800 dark:text-white bg-white text-black drop-shadow-lg")}>
        <p className={combineClasses(classes.article_card__date, "font-medium text-xs mt-3 mb-2")}>{article.date}</p>
        <LinkTo href={path} passHref={true}>
          <h1 className={combineClasses(classes.article_card__title, "text-[22px] font-bold my-0")} >
            {article.articleTitle}
          </h1>
        </LinkTo>
        <div className={classes.article_card__tags}>
          {
            article.tags.split(',').map((each, i) => (
              <span key={i} className="text-xs font-normal mr-3" >#{each}</span>
            ))
          }
        </div>
        <div className={"flex items-center my-3"}>
          <div className={classes.author}>
            <div className={classes.author_img}>
              {article.author.profilePic ? <img src={article.author.profilePic} alt={article.author.name} /> : <img src={generateRandomAvtar()} alt={article.author.name} />}
            </div>
            <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p>
          </div>
          {
            article.category && <>
              <p className="text-sm px-[5px] font-normal">in</p>
              <p className={combineClasses(classes.article_card__category, "font-medium text-sm")}>
                <LinkTo href={"/blog?category=" + article.category} passHref={true}>
                  {article.category}
                </LinkTo>
              </p>
            </>
          }
        </div>
      </div>
    </LinkTo>
  </div>
)
export default SerachArticleCard