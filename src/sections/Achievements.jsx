import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../constants/index.js';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Competition', 'Education'];
  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section className="c-space my-20" id="achievements">
      <div className="w-full text-white-600">
        <p className="head-text">My Achievements</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-black-300 text-white-600 hover:bg-black-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="achievement-card group"
            >
              <div className="achievement-header">
                <div className="achievement-icon">
                  <img 
                    src={achievement.icon} 
                    alt={achievement.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="achievement-badge">
                  <span className="badge-text">{achievement.position}</span>
                </div>
              </div>

              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="achievement-date">{achievement.date}</span>
                  <span className="achievement-location">{achievement.location}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>

              <div className="achievement-category">
                <span className="category-tag">{achievement.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white-600 text-lg">No achievements found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements; 