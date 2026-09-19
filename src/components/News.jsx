import SectionHeader from "./SectionHeader";
import NewsCard from "./NewsCard";
import news from "../data/news";

export default function News() {
  return <section className="section section--white news" id="news"><div className="container reveal"><div className="section-row"><SectionHeader eyebrow="Press room" title="LATEST NEWS" /><a className="text-link" href="#join">View all news <span aria-hidden="true">↗</span></a></div><div className="news-grid">{news.map((item) => <NewsCard key={item.title} {...item} />)}</div></div></section>;
}