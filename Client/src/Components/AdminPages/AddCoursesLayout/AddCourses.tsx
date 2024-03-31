import './AddCourses.css'
import '../HomePage/AdminHome.css'
import { TextField, TextareaAutosize } from '@mui/material'
const AddCourses = () => {
  return (
    <>
       <div className="admin-home-container">
      <div className="admin-page-name">Add Courses</div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextareaAutosize minRows={2} />
    </div>
    </>
  )
}

export default AddCourses
