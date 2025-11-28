import "../static/index.css";

const Home = ({ currentTime }) => {
  return (
    <div>
      <h1>Contenu de la page Home</h1>
      <p>The current time is {new Date(currentTime * 1000).toLocaleString()}.</p>
    </div>
  );
};

export default Home;
