import "./App.css";
import Card from "./components/Card";

const posts = [
  { id: 1, status: "Critical", attendents: 4 },
  { id: 2, status: "High", attendents: 2 },
  { id: 3, status: "Low", attendents: 4 },
  { id: 4, status: "Critical", attendents: 1 },
];

function App() {
  return (
    <div className="App">
      {posts.map((post) => (
        <Card key={post.id} status={post.status} attendets={post.attendents} />
      ))}
    </div>
  );
}

export default App;
