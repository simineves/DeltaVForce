import "./Card.css"

const Card = ({
  img,
  title,
  body,
  direction,
  width = null,
  float = "left",
  className
}) => {
  return (
    <div
      className={`card-container flex-${direction} ${className}`}
      style={width && { width: width }}
    >
      {float === "left" ? (
        <>
          <img className="card-img" alt="temp img holder" src={img} />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text">{body}</p>
          </div>
        </>
      ) : (
        <>
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text">{body}</p>
          </div>
          <img className="card-img" alt="temp img holder" src={img} />
        </>
      )}
    </div>
  )
}

export default Card
