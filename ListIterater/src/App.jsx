import "./App.css";

function App(){
  const students = [
    {id:1, name: "Himanshu"},
    {id:2, name: "Shreyash"},
    {id:3, name: "Abhishek"},
    {id:4, name: "Akshay"},
    {id:5, name: "Akib"}
  ];
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student)=> (
          <li key={student.id} >{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;