import { useEffect, useState } from "react";
import AddButton from "../components/Button";
import { useNavigate } from "react-router-dom";
function AddEmployee() {
    const navigate = useNavigate();
    const [product, setProduct] = useState<any>([]);
    // const obj = {
    //     color: "green",
    //     font: "50px",
    //     class: "homepage"
    // }
    // const addEmployeeFunction = () => {
    //     navigate("/signup");
    // }
    // const addEmployeeFunction2 = () => {
    //     navigate("/");
    // }

    const get_Data = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        setProduct(response.json());
    }


    // useEffect(() => {
    //     fetch('https://dummy.restapiexample.com/api/v1/employees')
    //     .then((data)=>{
    //         setProduct(data);
    //         console.log(product,"product");
    //     }).catch((err)=>{
    //         console.log(err);
    //     },)
    // },[])

    return <>
        <div className="d-flex justify-content-center">
            <h2 className="text-success">ADD EMPLOYEE</h2><br />
            {/* <div>
                <AddButton
                    onClick={addEmployeeFunction}
                    type='button'
                    label={'SideBar Page'}
                    obj={obj}
                />
            </div> */}
            <button onClick={() => get_Data()}>add data</button>
            {/* <div>
                <AddButton
                    onClick={addEmployeeFunction2}
                    type='button'
                    label={'Go TO Home'}
                    obj={obj}
                />
            </div> */}
        </div>
        <div className="container mt-3">
            <h2>Product List</h2>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((p:any) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>{p.rating}</td>
                            <td><img src={p.image} alt={p.title} style={{ width: '100px' }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}
export default AddEmployee;