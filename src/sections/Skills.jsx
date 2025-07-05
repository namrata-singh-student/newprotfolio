import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/index.js';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', '3D Graphics'];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="c-space my-20" id="skills">
      <div className="w-full text-white-600">
        <p className="head-text">Technical Skills</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-black-300 text-white-600 hover:bg-black-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div className="skill-level">
                  <span className="level-text">{skill.level}%</span>
                </div>
              </div>

              <div className="skill-progress">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      background: `linear-gradient(90deg, #10B981 0%, #34D399 100%)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white-600 text-lg">No skills found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills; 