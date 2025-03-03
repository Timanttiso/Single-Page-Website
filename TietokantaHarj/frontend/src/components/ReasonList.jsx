import { useState, useEffect } from "react";
import axios from "axios";


export default function ReadMeetings({refresh}) {
    const [reasons, setMeetings] = useState([]);
    const [error, setError] = useState("");

    
    const fetchMeetings = async () => {
        try {
            const response = await axios.get("http://localhost:3000/contactRequests");
            setMeetings(response.data);
        } catch (err) {
            setError("Error fetching meetings: " + (err.response?.data?.error || err.message));
        }
    };
    useEffect(() => {
        fetchMeetings();
    }, [refresh]);
    

    return (
        <div>
            <section>
                <h2>Meeting List</h2>
                {error && <p>{error}</p>}
                <ul>
                    {reasons.map((reason) => (
                        <li key={reason.id} class="meetingList">{reason.name} ({reason.email}) Reason: {reason.reason}</li>
                    ))} 
                </ul>
            </section>
        </div>
    );
}