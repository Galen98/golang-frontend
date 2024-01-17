import axios from "axios"
import { useState, useEffect } from "react"
export default function Addnew(){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [category, setCategory] = useState('')

const handlePublish = () => {
    axios.post("http://localhost:8080/article", {
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
}

const handleDraft = () => {
    axios.post("http://localhost:8080/article", {
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
}

    return(
        <>
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" 
    onChange={(title) => setTitle(title.target.value)}
    value={title}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Content</label>
    <textarea type="text" 
    onChange={(content) => setContent(content.target.value)}
    value={content}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Category</label>
    <input type="text" 
    onChange={(category) => setCategory(category.target.value)}
    value={category}
    className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <a onClick={() => handlePublish()} className="btn btn-primary">Publish</a> 
  <a onClick={() => handleDraft()} type="submit" className="btn btn-dark ml-3">Draft</a> 
    </form>
        </>
    )
}