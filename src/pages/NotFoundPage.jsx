import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <div className="not-found-decoration">☸</div>
          <Link to="/" className="cta-button primary">Return to Home</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
