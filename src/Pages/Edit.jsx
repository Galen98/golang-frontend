import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Edit(){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [category, setCategory] = useState('')
const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/article/${id}`)
        .then(response => {
            setCategory(response.data.data.category)
            setTitle(response.data.data.title)
            setContent(response.data.data.content)
        })
    },[])
    
const handlePublish = () => {
    axios.patch(`http://localhost:8080/article/${id}`, {
      'title': title,
      'content': content,
      'category': category,
      'status': 'Publish'
    })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    setCategory('')
    setContent('')
    setTitle('')
    window.location.href = '/';
}

const handleDraft = () => {
    axios.patch(`http://localhost:8080/article/${id}`, {
      'title': title,
      'content': content,
      'category': category,
      'status': 'Draft'
    })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    setCategory('')
    setContent('')
    setTitle('')
    window.location.href = '/';
}

    return(
        <>
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" 
    defaultValue={title}
    onChange={(title) => setTitle(title.target.value)}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Content</label>
    <textarea type="text"
    defaultValue={content} 
    onChange={(content) => setContent(content.target.value)}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Category</label>
    <input type="text" 
    onChange={(category) => setCategory(category.target.value)}
    defaultValue={category}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <a onClick={() => handlePublish()} className="btn btn-primary">Publish</a> 
  <a onClick={() => handleDraft()} type="submit" className="btn btn-dark ml-3">Draft</a> 
    </form>
        </>
    )
}