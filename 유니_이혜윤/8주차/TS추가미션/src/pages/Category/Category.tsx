import React from "react";
import { Link } from "react-router-dom";

const Category: React.FC = () => {
  return (
    <div className="w-full h-full p-8 bg-black">
      <p className="text-xl mb-4 text-white">Category</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/movies/now-playing" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D"
              alt="현재 상영중인"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-2 left-2 text-[#888] bg-black bg-opacity-50 p-1 rounded text-sm">
              현재 상영중인
            </span>
          </div>
        </Link>

        <Link to="/movies/popular" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="인기있는"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 text-[#888] bg-black bg-opacity-50 p-1 rounded text-sm">
              인기있는
            </span>
          </div>
        </Link>

        <Link to="/movies/top-rated" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="높은 평가를 받은"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 text-[#888] bg-black bg-opacity-50 p-1 rounded text-sm">
              높은 평가를 받은
            </span>
          </div>
        </Link>

        <Link to="/movies/up-coming" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523207911345-32501502db22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fHww"
              alt="개봉 예정중인"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 text-[#888] bg-black bg-opacity-50 p-1 rounded text-sm">
              개봉 예정중인
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
