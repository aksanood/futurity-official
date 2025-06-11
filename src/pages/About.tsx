
// This file redirects to AboutFuturity for backward compatibility
import { Navigate } from 'react-router-dom';

const About = () => {
  return <Navigate to="/about-futurity" replace />;
};

export default About;
