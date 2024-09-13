import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

const Company = () => {

  const [exhibitionData, setExhibtionData] = useState([])
  const [industryData, setIndustryData] = useState([])
  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    contactNo: "",
  })

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // get Api  company data
  useEffect(() => {
    axios.get('http://localhost:3001/getcompany')
      .then((x) => setExhibtionData(x.data))
      .catch((x) => console.log(x));
  }, [])

  // get Api of Indutry data
  useEffect(() => {
    axios.get('http://localhost:3001/getindustry')
      .then((x) => setIndustryData(x.data))
      .catch((x) => console.log(x));
  }, [])

  // post api 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/addcompany', data)
      .then((x) => console.log(x))
      .catch((x) => console.log(x));
  }




  return (
    <>
      <h1>Company Data</h1>
      <form className='container justify-content-center mt-4' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Company Name</label>
          <input type="text" className="form-control" name="name" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Address</label>
          <input type="text" className="form-control" name="address" onChange={handleInput} />
        </div>


        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" name="email" onChange={handleInput} />
        </div>


        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Conatct No</label>
          <input type="number" className="form-control" name="contactNo" onChange={handleInput} />
        </div>


        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <select className="form-control" id="industry" name="industry" onChange={handleInput}>
            {industryData.map((industry) => (
              <option key={industry} value={industry.title}>
                {industry.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


      {/* show data in table  */}
      <table className="table container mt-4">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Industry</th>

          </tr>
        </thead>
        <tbody>
  {exhibitionData.map((item, index) => {
    console.log(item.industry);
    const industry = industryData.find((i) => i._id === item.industry);
    console.log(industry);
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.email}</td>
        <td>{item.contactNo}</td>
        <td>{item.industry}</td>
      </tr>
    );
  })}
</tbody>
      </table>
    </>
  )
}

export default Company
