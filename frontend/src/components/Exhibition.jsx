import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

const Exhibition = () => {
    
  const [exhibitionData, setExhibtionData] = useState([])
  const [data, setData] = useState({
    title: "",
    desc: "",
    startDate: "",
    endDate: "",
    fees: "",
  })

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // get Api 
  useEffect(() => {
    axios.get('http://localhost:3001/getevents')
      .then((x) => setExhibtionData(x.data))
      .catch((x) => console.log(x));
  }, [])

  // post api 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/addevents', data)
      .then((x) => console.log(x))
      .catch((x) => console.log(x));
  }


  return (
     <>
    <h1>Event Management System </h1>
      <form className='container justify-content-center mt-4' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" name="title" onChange={handleInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input type="text" className="form-control" name="desc" onChange={handleInput}/>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" className="form-control" id="startDate" name="startDate" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" className="form-control" id="endDate" name="endDate" onChange={handleInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" id="status" name="fees" onChange={handleInput}>
            <option>Free</option>
            <option>Paid</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


{/* show data in table  */}
      <table className="table container mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {exhibitionData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Exhibition
