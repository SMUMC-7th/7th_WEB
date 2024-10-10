import Cards from '../components/Cards/Cards';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section>
        <Sidebar />
        <Cards />
        <a className="gitIcon" href="https://github.com/202110861">
          <FaGithub size="30px" />
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
