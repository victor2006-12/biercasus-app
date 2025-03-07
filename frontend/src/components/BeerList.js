import React, { useEffect, useState } from "react";

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/beers")
            .then(response => response.json())
            .then(data => {
                setBeers(data);
                setLoading(false);
            })
            .catch(error => console.error("Fout bij ophalen biertjes:", error));
    }, []);

    if (loading) {
        return <p>Bezig met laden...</p>;
    }

    return (
        <div>
            <h2>Bierlijst</h2>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Gemiddelde Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {beers.map(beer => (
                        <tr key={beer.id}>
                            <td>{beer.name}</td>
                            <td>{beer.ratings.length > 0 
                                ? (beer.ratings.reduce((sum, r) => sum + r.rating, 0) / beer.ratings.length).toFixed(1) + " ⭐" 
                                : "Nog geen ratings"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BeerList;
