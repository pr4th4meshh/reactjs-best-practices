const DontHardcode = () => {
  const GENRES = [
    {
      identifier: "fiction",
      name: "Fiction",
    },
    {
      identifier: "classics",
      name: "Classics",
    },
    {
      identifier: "fantasy",
      name: "Fantasy",
    },
    {
      identifier: "romance",
      name: "Romance",
    },
  ]
  return (
    <div style={{ border: "1px solid red" }}>
      <h1 style={{ color: "turquoise", }}>Book Genres</h1>
      <ul>
        {GENRES.map((genre, id) => (
          <li>
            <div>
              <h1 key={id}>{genre.name}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DontHardcode
