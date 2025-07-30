import reasons from "../constants/reasons";
import ReasonCard from "../components/ReasonCard";
import "../components/ReasonCard.css";
import "./Reasonpage-card.css";
export default function ReasonsPage() {
  return (
    <>
      <div className="ReasonsPage">
        <h2
          style={{ color: "white", marginBottom: "10px", marginLeft: "200px" }}
        >
          More Reasons to Join
        </h2>
        <div className="Reasonpage-card">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
