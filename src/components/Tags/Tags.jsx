import "./Tags.css"

function Tags({ tags }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="tags">
      {tags.map((tag) => (
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
