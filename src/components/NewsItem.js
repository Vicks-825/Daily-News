import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, channel } = props;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt="this is newsimg" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}<span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">{channel}</span></div>
          <p className="text-gray-700 text-base mb-2">
            {description}
          </p>
          <p className='mb-4'><small className='font-bold'>By {author ? author : "Unknown"}; On {(new Date(date)).toLocaleString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem