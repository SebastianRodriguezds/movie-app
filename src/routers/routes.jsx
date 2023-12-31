import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import {MovieDetails} from "../pages/MovieDetails";

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:id" element={<MovieDetails />} />

      </Routes>
    </Router>
  );
}
