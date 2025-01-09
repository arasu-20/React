import React, { Component } from 'react'

export class FakeApiPost extends Component {
    constructor(props) {
      super(props)
    
        this.state = {
            id:'',
            name:'',
            course:''
        }
        }
    
        postHandler = event=>{
            axios.post("https://jsonplaceholder.typicode.com/posts")
            .then
        }
    
  render() {
    return (
      <div>
        <form>
            <input type="text" name='id'/>
            <input type="text" name='name'/>
            <input type="text" name='course'/>
        </form>
      </div>
    )
  }
}

export default FakeApiPost
