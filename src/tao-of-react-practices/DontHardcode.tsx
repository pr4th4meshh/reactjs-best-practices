const DontHardcode = ({ nameProps }: string) => {
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
      <h1 style={{ color: "turquoise" }}>Book Genres</h1>
      <h1>{nameProps?.v.firstNamee + " " + nameProps?.v.lastNamee}</h1>
      <ul>
        {GENRES.map((genre, id) => (
          <li key={id}>
            <div>
              <h1>{genre.name}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DontHardcode
