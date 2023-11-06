interface PrimitivePropTypes {
    name: string
    age: number
    gender: string
}


const UserProfile = ({ name, age, gender }: PrimitivePropTypes) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Gender: {gender}</h1>
    </div>
  )
}

const PrimitiveProps = () => {
    const firstName = "Prathamesh"
    const lastName = "Asolkar"
    const fullName = firstName + lastName
    const age = 20
    const gender = "male"
  return (
    <div style={{border: '1px solid green', marginTop: '20px'}} >
      <UserProfile name={fullName} age={age} gender={gender} />
    </div>
  )
}

export default PrimitiveProps
