import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCity, getDistrict } from "../../redux/address/action"

const ListAddress = () => {
  const dispatch = useDispatch();

  const listStreet = useSelector(store => store.address.listStreet)
  const listDistrict = useSelector(store => store.address.listDistrict)

  const [show, setShow] = useState(false)
  const [street, setStreet] = useState(null)
  console.log(street, 'tesst')

  useEffect(() => {
    dispatch(getCity())
  }, [])

  useEffect(() => {
    if(street) {
      const IdStreet = listStreet.LtsItem.find(item => item.Title == street) 
      dispatch(getDistrict(IdStreet))
      console.log(IdStreet)
    }
  }, [street])

  return (
    <div className="list-address">
      <select className="form-control" onChange={(e) => setStreet(e.target.value)}>
        {listStreet && listStreet.LtsItem.map((item, index) => (
            <option key={index} value={item.Title}>{item.Title}</option>
        ))}
      </select>
    </div>
  )
}

export default ListAddress