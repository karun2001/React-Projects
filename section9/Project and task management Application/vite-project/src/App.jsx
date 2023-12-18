import EditProject from './assets/components/EditProject'
import HomeScreen from './assets/components/HomeScreen'
import AddProject from './assets/components/AddProject'
import { useState } from 'react'
import './App.css'
import SideBar from './assets/components/SideBar'


function App() {

  let screen;
  console.log("starting point");
  const [projects, setProject] = useState({values : []});
  const [mainScreen, setScreen] = useState("home");
  
  function handleAddProject(){
    setScreen("addProject");
  }

  function addStateToProject(title, description, date){
    setProject((prevValues)=>{
      return {
        values : [...prevValues["values"],
        {
          'title':title,
          'description':description,
          'date':date,
          'tasks':[],
        }],
      }
    });
    setScreen("home");
  }
  
  function handleEdit(title){
    setScreen(title);
  }

  function removeProject(project){
    setProject(prevProjects =>{
      return {
        ...prevProjects,
        values: prevProjects["values"].filter(obj=> obj.title == mainScreen? false : true)
      }
    })
    setScreen("home");
  }

  const obj = projects["values"].find(object => object["title"] === mainScreen);
  const index = projects["values"].indexOf(obj);
  
  if(mainScreen==="home"){
    screen = <HomeScreen handleAddProject={handleAddProject} />
  } else if(mainScreen==="addProject"){
    screen = <AddProject addStateToProject={addStateToProject} />
  } else{
    screen = <EditProject project={obj} index={index} addTask={addTasksToState} removeTask={removeTaskFromState} removeProject={removeProject} />
  }
  
  function removeTaskFromState(objIndex, taskIndex){
    setProject(prevProjeccts => {
      let newProjects ={};
      newProjects =JSON.parse(JSON.stringify(prevProjeccts));
      newProjects["values"][objIndex]["tasks"].splice(taskIndex,1);
      return{
        ...newProjects,
      }
    })
  }

  function addTasksToState(index, task){
    setProject(prevProjeccts => {
      let newProjects ={};
      newProjects =JSON.parse(JSON.stringify(prevProjeccts));
      newProjects["values"][index]["tasks"] = [task, ...prevProjeccts["values"][index]["tasks"]];
      return{
        ...newProjects,
      }
    })
  }
  
  console.log("projects after updating all values", projects);
  
  return (
    <div className="container">
      <SideBar 
        projectList={projects} 
        handleAddProject={handleAddProject} 
        handleEdit={handleEdit}
      />
      <main>
          {screen}
      </main>  
    </div>
  )
}

export default App;
