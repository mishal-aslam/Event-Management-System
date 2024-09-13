import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

const Industry = () => {
    
  const [industryData, setIndustryData] = useState([])
  const [data, setData] = useState({
    title: "",
  })

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // get Api 
  useEffect(() => {
    axios.get('http://localhost:3001/getindustry')
      .then((x) => setIndustryData(x.data))
      .catch((x) => console.log(x));
  }, [])

  // post api 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/addindustry', data)
      .then((x) => console.log(x))
      .catch((x) => console.log(x));
  }


  return (
     <>
    <h1>Industry </h1>
      <form className='container justify-content-center mt-4' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Industry</label>
          <input type="text" className="form-control" name="title" onChange={handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


{/* show data in table  */}
      <table className="table container mt-4">
        <thead>
          <tr>
            <th>Title</th> 
          </tr>
        </thead>
        <tbody>
          {industryData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Industry
