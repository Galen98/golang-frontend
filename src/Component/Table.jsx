import axios from "axios"
import { useState } from "react"

const Table = (data) => { 
const datas = Object.values(data.data)
const [filter, setFiltersearch] = useState('')
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [category, setCategory] = useState('')

const Filters = (data) => {
  setFiltersearch(data)
}

const UpdateTrash = (id) => {
  axios.get(`http://localhost:8080/article/${id}`)
    .then(response => {
      setTitle(response.data.data.title);
      setCategory(response.data.data.category);
      setContent(response.data.data.content);
    })
    .then(() => {
      axios.put(`http://localhost:8080/article/${id}`, {
        'title': title,
        'content': content,
        'category': category,
        'status': 'Trash'
      });
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });
    console.log(content)
};

console.log(title)
    return(
        <>
    <a type="button" href="/addnew"
    className="btn mb-4 btn-light">Add new</a>
    <a type="button"
    onClick={() => Filters('')}
    className="btn mb-4 ml-5 btn-dark">All Post</a>
    <a type="button"
    onClick={() => Filters('Publish')}
    className="btn mb-4 ml-1 btn-primary">Publish</a>
    <a type="button" 
    onClick={() => Filters('Draft')}
    className="btn mb-4 ml-1 btn-warning">Draft</a>
    <a type="button" 
    onClick={() => Filters('Trash')}
    className="btn mb-4 ml-1 btn-danger">Trash</a>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Content</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {datas.filter((data) => {
        const isaMatched = filter === '' || data.status == filter;
        return isaMatched;
    }).map((data, i) => (
    <tr>
      <th scope="row" key={i}>{i + 1}</th>
      <td>{data.title}</td>
      <td>{data.category}</td>
      <td>{data.content}</td>
      <td>{data.status === 'Publish' ? (
        <span className="badge badge-primary">Publish</span>
        ) : data.status === 'Trash' ? (
            <span className="badge badge-danger">Trash</span>
        ) : data.status === 'Draft' ? (
            <span className="badge badge-warning">Draft</span>
        ) : null}</td>
      <td><div className="dropdown">
    <a className="btn btn-secondary dropdown-toggle" 
    href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        Action
    </a>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Edit</a>
    <a onClick={() => UpdateTrash(data.id)}
    className="dropdown-item">Trash</a>
  </div>
</div></td>
    </tr>
    ))}
  </tbody>
</table>
        </>
    )
}

export default Table