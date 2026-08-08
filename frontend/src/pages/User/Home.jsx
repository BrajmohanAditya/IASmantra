import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/HeroSection/heroSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StudyMaterial from "./study.material";
import SuccessBoardDisplay from "./success.board";
import Footer from "@/components/userComponent/footer";
import QualifiedMentorsDisplay from "./qualifiedMentors.board";
import TrendingBar from "@/components/userComponent/TrendingBar";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 30000); // 30 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("hasSeenPopup", "true");
    setShowPopup(false);
  };

  return (
    <div className="min-h-[88vh] bg-slate-50">
      <TrendingBar />
      <HeroSection />
      <StudyMaterial />
      <CourseSection />
      <QualifiedMentorsDisplay />
      <SuccessBoardDisplay />
      <Footer />

      <FloatingWhatsApp />


    </div>
  );
};

export default Home;
