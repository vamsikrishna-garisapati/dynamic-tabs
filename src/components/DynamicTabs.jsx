import { useState, useEffect } from "react";

const DynamicTabs = () => {
  const [tabs, setTabs] = useState([{ id: 1, title: "Tab 1", imageUrl: "" }]);
  const [activeTab, setActiveTab] = useState(1);

  const fetchRandomImage = async () => {
    const category = 'nature';
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
        headers: { 
          'X-Api-Key': '1Whpl0478Bzb8Qp2OLgTww==zCHR9mdr69iYMhiN', // Replace with your API key
          'Accept': 'image/jpg'
        }
      });
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching random image:', error);
      return null;
    }
  };

  // Fetch an image for the first tab when the component mounts
  useEffect(() => {
    const initializeFirstTab = async () => {
      const imageUrl = await fetchRandomImage();
      setTabs([{ id: 1, title: "Tab 1", imageUrl }]);
    };
    initializeFirstTab();
  }, []);

  const addTab = async () => {
    const newId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    const imageUrl = await fetchRandomImage();
    setTabs([...tabs, { id: newId, title: `Tab ${newId}`, imageUrl }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    if (tabs.length === 1) return; // Prevent removing the last tab
    const filteredTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(filteredTabs);
    if (activeTab === id) {
      setActiveTab(filteredTabs[0].id); // Switch to the first tab if the active tab is removed
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <div key={tab.id} className="tab-item">
            <button
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
            {tabs.length > 1 && (
              <button
                className="close-button"
                onClick={() => removeTab(tab.id)}
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button className="add-tab-button" onClick={addTab}>Add Tab</button>
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.imageUrl && (
          <img 
            src={tabs.find((tab) => tab.id === activeTab).imageUrl} 
            alt="Random" 
            className="tab-image"
          />
        )}
      </div>
    </div>
  );
};

export default DynamicTabs;