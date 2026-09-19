export default function NewsCard({ category, title, date, image }) {
  return <article className="news-card"><img src={image} alt="" loading="lazy" /><div><small>{category} <span>•</span> {date}</small><h3>{title}</h3><a href="#join">Read more <span aria-hidden="true">↗</span></a></div></article>;
}