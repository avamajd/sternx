import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="container pb-5">
      <Header
        title="Farhad's macBook's Notes"
        subtitle="Helps you submit notices & remind them"
      />

      <NoteList />
    </div>
  );
}

export default App;
