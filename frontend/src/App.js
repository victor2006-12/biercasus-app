import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/beers")
            .then(response => setBeers(response.data))
            .catch(error => console.error("Error fetching beers:", error));
    }, []);

    return (
        <div>
            <h2>We Like Bier</h2>
            <ul>
                {beers.map(beer => (
                    <li key={beer.id}>
                        {beer.name} - Gemiddelde rating: {beer.likes_avg_rating || 0} ⭐
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
