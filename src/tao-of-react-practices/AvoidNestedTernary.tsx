interface TernaryOperatorPropTypes {
    subscribed: boolean
    registered: boolean
}

function CallToActionWidget({ subscribed, registered }: TernaryOperatorPropTypes) {
    if (subscribed) {
      return <h1>Subscribed!!</h1>
    }
  
    if (registered) {
      return <h1>Registered!!</h1>
    }
  
    return <h1>Aw snaps :( You need to register </h1>
  }
  
  function AvoidNestedTernaryOperator() {
    const subscribed = false
    const registered = true
    return (
      <div style={{border: '1px solid red', marginTop: '20px'}} >
        <CallToActionWidget
        subscribed={subscribed}
        registered={registered}
      />
      </div>
    )
  }

  export default AvoidNestedTernaryOperator