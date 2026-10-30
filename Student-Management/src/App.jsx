
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim() || !form.course) {
    setError("Please fill in all fields.");
    return;
  }

  if (editingId) {
    setStudents(students.map((student) =>
      student.id === editingId
        ? { ...student, ...form, name: form.name.trim(), email: form.email.trim() }
        : student
    ));
    setEditingId(null);
  } else {
    setStudents([
      ...students,
      {
        id: crypto.randomUUID(),
        name: form.name.trim(),
        email: form.email.trim(),
        course: form.course,
      },
    ]);
  }

  setForm({ name: "", email: "", course: "" });
  setError("");
}
  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(search.toLowerCase()));

  function deleteStudent(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmed) return;

  setStudents((prevStudents) =>
    prevStudents.filter((student) => student.id !== id)
  );
}
function editStudent(student){
  setForm({
    name:student.name,
    email: student.email,
    course: student.course,
  });
  setEditingId(student.id);
  setError("");
}
  return (
    <div className="container">
      <h1>Student Management System</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Student name"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
        />

        <select
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select course</option>
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
          <option value="BTech">B.Tech</option>
        </select>

        <button type="submit">{editingId ?"Update Student" : "Add Student"}</button>
      </form>

      {error && <p className="error">{error}</p>}

      <input
        className="search-input"
        placeholder="Search students by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="4">No students added yet.</td>
            </tr>
          ) : (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button type="button" onClick={() => editStudent(student)}>Edit</button>
                  <button type="button" onClick={() => deleteStudent(student.id)}>
                      Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
