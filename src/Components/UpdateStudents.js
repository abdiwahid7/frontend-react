





useEffect(() =>{
    const token = sessionStorage.getItem("accessToken")

    setLoading(true);

    axios.get('http://localhost:4000/UpdateStudent/' + _id,{
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