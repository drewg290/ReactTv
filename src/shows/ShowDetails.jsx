import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <div>Please select a show to see details.</div>;
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <EpisodeList
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
      />
      {selectedEpisode && <EpisodeDetails episode={selectedEpisode} />}
    </div>
  );
}
