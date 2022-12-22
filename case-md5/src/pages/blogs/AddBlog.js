import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {login} from "../../services/userService";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBlogs} from "../../services/blogsService";
import {storage} from "../../fireBase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => {
        return state.user.currentUser;
    })
    const [submitting, setSubmitting] = useState(false)
    const handleAdd = (values) => {
        let data = {
            ...values,
            idU: users.id,
            time: new Date().getTimezoneOffset(),
            url: img
        }
        dispatch(addBlogs(data))
        navigate('/home')
    }
    const [imageUrls, setImageUrls] = useState([]);
    const [img, setImg] = useState("");
    const imagesListRef = ref(storage, "images/");
    const uploadFile = (imageUpload) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url)
                setSubmitting(false)
            });
        })
    };
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (

        <div>
            <h1 style={{textAlign: "center"}}>Add Blogs</h1>
            <Formik initialValues={{
                title: '',
                content: '',
                time: '',
                url: imageUrls
            }} onSubmit={(values) => {
                handleAdd(values);
            }}>
                <Form>
                    <div className="group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <Field type={'text'} name={'title'} className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contents</label>
                        <Field type={'number'} name={'content'} className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Image</label>
                        <input
                            type="file" onChange={(event) => {
                                setSubmitting(true)
                            uploadFile(event.target.files[0])
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Status</label>
                        <div>
                            <Field as="select" name="status">
                                <option disabled value="">Pick a winner</option>
                                <option value='1'>Public</option>
                                <option value='2'>Private</option>
                            </Field>
                        </div>
                    </div>
                    <button type="submit" disabled={submitting}>Submit</button>
                </Form>
            </Formik>
            {/*<button onClick={uploadFile}>Upload</button>*/}
        </div>
    );
}
export default AddBlog;