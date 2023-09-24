import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import SocialContact from "../components/homeComponents/SocialContact";
import Footer from "./../components/Footer";
import Video from "../components/homeComponents/Video";
const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword
  const pagenumber = match.params.pagenumber
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} />
      <CalltoActionSection />
      <ContactInfo />
      <Video/>
      <SocialContact/>
      <Footer />
    </div>
  );
};

export default HomeScreen;
