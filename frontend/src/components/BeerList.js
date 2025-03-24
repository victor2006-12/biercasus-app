import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Controleer of de gebruiker ingelogd is
    useEffect(() => {
        fetch("/api/user", {
            credentials: "include", // Zorgt ervoor dat cookies/sessies werken
            headers: {
            }
        })
        .then(res => res.json())
        .then(user => {
            if (!user) {
                router.visit("/login"); // Stuur terug naar login als er geen user is
            }
        })
        .catch(() => router.visit("/login")); // Fallback als de API faalt
    }, []);
    

    // Haal de lijst met bieren op
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/beers")
            .then(response => response.json())
            .then(data => {
                setBeers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Fout bij ophalen biertjes:", error);
                setLoading(false);
            });
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
                            <td>
                                {beer.likes.length > 0 
                                    ? (beer.likes.reduce((sum, like) => sum + like.rating, 0) / beer.likes.length).toFixed(1) + " ⭐" 
                                    : "Nog geen ratings"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BeerList;
