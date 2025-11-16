tsx
import React, { useState, useEffect } from 'react';

type Achievement = {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
};const achievementsList: Achievement[] = [
  { id: 'first_level', title: 'Первый уровень', description: 'Пройди первый уровень', unlocked: false, icon: '⭐️' },
  { id: '1000_score', title: '1000 очков', description: 'Набери 1000 очков', unlocked: false, icon: '🏆' },
  { id: 'rainbow_10', title: '10 радуг!', description: 'Собери 10 радужных фишек', unlocked: false, icon: '🌈' },
];

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('achievements');
    return saved ? JSON.parse(saved) : achievementsList;
  });

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  return (
    <div className="achievements">
      <h3>Достижения</h3>
      {achievements.map(ach => (
        <div key={ach.id} className={achievement ${ach.unlocked ? 'unlocked' : 'locked'}}>
          <span className="icon">{ach.icon}</span>
          <div>
            <div className="title">{ach.title}</div>
            <div className="desc">{ach.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
