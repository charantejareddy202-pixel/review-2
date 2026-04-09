import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/dashboard.css";

function TrackComplaints() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get(`/complaints/user/${user.email}`);
      setComplaints(res.data);
    } catch (error) {
      console.log("Error fetching complaints");
    }
  };

  return (
    <div className="track-page">
      <div className="track-header">
        <h1>My Complaints</h1>
        <p>View all complaints you have submitted and track their status.</p>
      </div>

      {complaints.length === 0 ? (
        <p className="empty-text">No complaints found</p>
      ) : (
        <div className="track-grid">
          {complaints.map((c) => (
            <div key={c.id} className="complaint-card">
              <h3 className="complaint-title">{c.title}</h3>

              <p className="complaint-desc">{c.description}</p>

              <p className="complaint-status-row">
                <strong>Status:</strong>
                <span className={`status-badge ${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
              </p>

              <p className="complaint-date">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrackComplaints;