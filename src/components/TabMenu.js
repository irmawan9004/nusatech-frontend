import React from 'react';
import '../styles/components/TabMenu.css';

function TabMenu({ activeTab, onTabChange }) {
  return (
    <div className="tab-menu">
      <button
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onTabChange('all')}
      >
        All
      </button>
      <button
        className={`tab ${activeTab === 'groups' ? 'active' : ''}`}
        onClick={() => onTabChange('groups')}
      >
        Groups
      </button>
      <button
        className={`tab ${activeTab === 'unread' ? 'active' : ''}`}
        onClick={() => onTabChange('unread')}
      >
        Unread
      </button>
    </div>
  );
}

export default TabMenu;
