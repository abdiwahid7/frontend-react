import { useEffect,useState} from "react";
import { useParams }  from "react-router-dom";
import Button from "react-bootstrap/Button";
import form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const UpdateStudent =()=>{
    const {id}=useParams();
    const [loading,setLoading]= useState(false);

useEffect(() =>{
    const token = sessionStorage.getItem("accessToken")

    setLoading(true);

    axios.get('http://localhost:4000/UpdateStudent/' + student_id,{
        headers:{
            Authorization:'Bearer ${Token}',
            'Content-Type':'application/json',
        },
    })

    .then(res =>{
        setData({
            _id: res.data._id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            gender:res.data.gender
        });
    })
    .catch(err =>console.log(err)).finally(()=>{
        setLoading(false);
    });
},[_id]);

const [data,setData]=useState({
    firstname:"",
    lastname:"",
    gender:""
})

.catch((err)=> {
    toast.error("An error occured while updating the record.",{
        position:toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    })
const navigate = useHistory();

const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
};
//.......................................................
const saveStudent = (e) =>{
    e.preventDefault();
    const token = sessionStorage.getItem("accessToken");

    setLoading(true);

    axios
    .patch('http://localhost:4000/updateSTUDENT/' + student_id ,data,{
        headers:{
            Authorization:'Bearer ${Token}',
            'Content-Type':'application/json',
        },
    })
    //then(res=>console.log(res))
    .then((res)=>{
      alert("Student updated successfully");
      navigate.push("/student");
    })
    .finally(()=>{
        setLoading(false);
    });
};

return (
    <div className='class="d-flex justify-content-cdnter mx-auto col-md-12 p-5 rounded shadow AddStudent'>
        <form onSubmit={saveStudent}>
            <h4 className="pb-1 display-12">Edit Student</h4>

            <form.Group className="mb-3" required controlI="unit_Id">
                <Form.control
                type="hidden"
                required
                onChange={handleChange}
                value={data._id}
                name="_id"
                disabled="disabled"
                />
            </form.Group>

            <form.Group className="mb-3" required controlI="formBasicEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.control
                type="input"
                required
                onChange={handleChange}
                value={data.firstname}
                name="firstname"
                disabled="disabled"
                />
                {/*<p className='text-danger'>{formErrors.firstname}</p>*/}
            </form.Group>

            <form.Group className="mb-3" required controlI="formBasicEmail">
                <Form.Label>Lastname</Form.Label>
                <Form.control
                type="input"
                required
                onChange={handleChange}
                value={data.lasttname}
                name="lastname"
                disabled="disabled"
                />
                {/*<p className='text-danger'>{formErrors.lastname}</p>*/}
            </form.Group>

            <form.Group className="mb-3" required controlI="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.control
                type="input"
                required
                onChange={handleChange}
                value={data.gender}
                name="gender"
                disabled="disabled"
                />
                {/*<p className='text-danger'>{formErrors.phonenumber}</p>*/}
            </form.Group>

            <Button variant="primary" type="submit">
                Update
            </Button>
            <ToastContainer />
        </form>
    </div>
);
})
};

export default UpdateStudent;