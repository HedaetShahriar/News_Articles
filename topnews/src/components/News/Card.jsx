const Card = ({ data }) => {
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={data.urlToImage} alt={data.title} className="object-cover w-full h-60"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">{data.title}</h2>
          <p className="line-clamp-3 h-16">{data.description}</p>
          <div className="card-actions justify-end">
            {data.source && (
              <div className="badge badge-outline">{data.source.name}</div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
