import React, { useEffect, useState } from "react";
import axios from "axios";
const MainComponent = () => {

    const initialState = []

    const [movies, setMovies] = useState(initialState);

    const [movie, setMovie] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080`).then(res => {
            console.log(res);
            setMovies(res.data);
        }).catch(err => {
            alert(err.message)
        })

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.value !== "") {
            axios.post(`http://127.0.0.1:8080`, { movie })
                .then(res => {
                    console.log(res.data)
                    setMovies(prevMovies => [...prevMovies, res.data]);
                    setMovie("");
                }).catch(err => {
                    alert(err.message);
                })
        }
    }

    return <div>
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="movie" value={movie} onChange={e => setMovie(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        <ul>
            {movies.map(e => (<li key={e.id}>{e.movie}</li>))}
        </ul>
    </div>

}

export default MainComponent;