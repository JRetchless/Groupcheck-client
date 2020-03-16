import React from 'react'
import { Link } from 'react-router-dom'
import List from './list'
import ApiContext from '../ApiContext'

export default class ListHomePage extends React.Component {
 
  static contextType = ApiContext;

  // constructor(props){
  //   super(props);
  //   console.log(props);
  //   this.state= {lists: []};
  // }

  componentDidMount(){
    console.log('listhomepage component mounted');
    // console.log(this.state.lists);
    // console.log(this.state.lists);
    console.log(this.context.user.id);

    fetch('http://localhost:8000/api/lists/'+ this.context.user.id, {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
  })
    .then(res => res.json())
    .then(data => {
      console.log('this is data: ')
      console.log(data)
      this.context.setLists(data)
    })
}
  
    render(){
      let lists = this.context.lists
        console.log('this.context.lists: ')
        console.log(lists)
        console.log('context lists length: ')
        console.log(lists.length)
        return (
            <div className='ListHomePage'>
              <ul className='ListHomePage__list'>
                {
                lists.map( list => (
                    <List 
                        key= {list.id}
                        id = {list.id}
                        name = {list.name}
                    />
                )) }
              </ul>
              <Link to='/add-list'>Add a list</Link>
            </div>
        )
        
    }
}

ListHomePage.defaultProps = {
  lists: []
}