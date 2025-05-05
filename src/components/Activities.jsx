import '../styles/Activities.css';

const Activities = () => {
  const activities = [
    {
      title: "Morning Arati",
      description: "Daily morning worship ceremony with kirtan and prayers.",
      time: "Daily, 5:30 AM - 7:00 AM"
    },
    {
      title: "Evening Arati",
      description: "Evening worship ceremony with bhajans and spiritual discourse.",
      time: "Daily, 6:30 PM - 8:00 PM"
    },
    {
      title: "Sunday Feast Program",
      description: "Weekly gathering featuring kirtan, spiritual discourse, and prasadam (sanctified vegetarian food).",
      time: "Sundays, 5:00 PM - 8:00 PM"
    },
    {
      title: "Bhagavad Gita Study",
      description: "In-depth study and discussion of Bhagavad Gita As It Is.",
      time: "Wednesdays, 6:00 PM - 7:30 PM"
    }
  ];

  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">Our Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p className="activity-time">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
