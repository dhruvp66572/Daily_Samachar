import React from 'react'

const NewsItem = (props)=> {

    let {title, description, imgurl, newsurl, author, date} = props;
    return (
      <div className="my-3">
         <div className="card">
          <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnHpTEi61x2qXfpDUwmICoXWr5OFJ2dH29A":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... 
            </p>
            <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
}
export default NewsItem