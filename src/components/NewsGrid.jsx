import NewsItem from './NewsItem';

function NewsGrid({items}) {
    console.log('items', items)
    return (
        <div className="news-grid">
            {items.map((item, i) => (
                <NewsItem key={i} item={item} />
                ))}
        </div>
    )
     

}

export default NewsGrid