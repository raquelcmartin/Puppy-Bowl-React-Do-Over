import axios from "axios"
import { useState, useEffect } from 'react'

export default function AllPlayers() {
    const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/raquelcmartin/players'
    const [players, setPlayers] = useState([])

    useEffect(() => {
    async function getAllPlayers() {
        try {

        const { data } = await axios.get(BASE_URL)
        const fetchedPlayers = data.data.players;
        console.log('this is the fetched players', fetchedPlayers);
        console.log('this is the data', data)

        setPlayers(fetchedPlayers);

        } catch (error) {
          console.error('getting puppies didnt work!', error)
        }

    }
    getAllPlayers();
    
    }, []);

    return(
        <div>
            hi
        </div>
    )
}
