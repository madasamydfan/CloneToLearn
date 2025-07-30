import reasons from '../constants/reasons';
import ReasonCard from '../components/ReasonCard';
export default function ReasonsPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        {reasons.map((reason, index) => (
          <ReasonCard
            key={index}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
          />
        ))}
      </div>
    </>
  );
}
