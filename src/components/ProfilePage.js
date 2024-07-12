import React from 'react';

const ProfilePage = () => {
  // Mock data for points and achievements
  const points = 100;
  const achievements = ['First Upload', '100 Views'];

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Points: {points}</p>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
