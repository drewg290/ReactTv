import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data"; // Ensure correct path

export default function App() {
  const [shows] = useState(tvShows); // Store shows in state
  const [selectedShow, setSelectedShow] = useState(null); // Track selected show

  return (
    <div className="app">
      <header>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </div>
  );
}
