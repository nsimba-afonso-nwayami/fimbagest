import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <h1 className="text-4xl text-blue-800">FimbaGest <i className="fas fa-building"></i></h1>

      <Footer />
    </>
  );
}
