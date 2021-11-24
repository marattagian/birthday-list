function List({ name, age, imageURL }) {
  return(<>
    <h4>{ name }</h4>
    <p>happy {age + 1} years!</p>
    <img src={imageURL} alt="Someone" />
  </>)
}

export default List