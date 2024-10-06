import React, { useState, useEffect } from 'react';

const ChartComponent2 = () => {
  const [currentGraph, setCurrentGraph] = useState(0);

  const graphData = [
    {
      heading: "Groundwater Levels Over Time",
      summary: "This graph shows the fluctuation of groundwater levels throughout the year, highlighting seasonal patterns and long-term trends.",
      imagePath: "/assets/images/blog/graph1.jpg"
    },
    {
      heading: "Seasonal Groundwater Variations",
      summary: "This graph illustrates the seasonal changes in groundwater levels, helping farmers plan their crop cycles and irrigation strategies.",
      imagePath: "/assets/images/blog/graph2.jpg"
    },
    {
      heading: "Long-term Groundwater Trends",
      summary: "This graph displays the long-term trends in groundwater levels, providing insights into potential water scarcity issues and conservation needs.",
      imagePath: "//assets/images/blog/graph3.jpg"
    },
    {
      heading: "Groundwater Levels by Region",
      summary: "This graph compares groundwater levels across different regions, helping identify areas that may require special attention or management.",
      imagePath: "/assets/images/blog/graph4.jpg"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentGraph((prev) => (prev + 1) % 4);
      } else if (event.key === 'ArrowLeft') {
        setCurrentGraph((prev) => (prev - 1 + 4) % 4);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center', 
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '20px' 
  }}>
    <h2>{graphData[currentGraph].heading}</h2>
    <p>{graphData[currentGraph].summary}</p>
    <img 
      src={graphData[currentGraph].imagePath} 
      alt={graphData[currentGraph].heading}
      style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
    />
    <div style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '10px', 
      borderRadius: '5px',
      marginTop: '20px'
    }}>
      <strong>Navigation Instructions:</strong>
      <p>Use the <kbd>←</kbd> Left Arrow and <kbd>→</kbd> Right Arrow keys to navigate between graphs.</p>
      <p>Current Graph: {currentGraph + 1} of 4</p>
      {/* <p>**Seasonality:**

* **Groundwater:** Groundwater levels are generally higher during the wet season (weeks 1-26) and lower during the dry season (weeks 27-52).
* **Runoff:** Runoff is highest during the wet season (weeks 1-26) and lowest during the dry season (weeks 27-52).
* **Floods:** Floods are most common during the wet season (weeks 1-26) and least common during the dry season (weeks 27-52).
* **Temperature:** Temperatures are highest during the summer months (weeks 2-12) and lowest during the winter months (weeks 27-52).

**Crop suitability:**

* **Wet season (weeks 1-26):** Crops that require high water availability, such as rice, sugarcane, and bananas, are suitable for this period.
* **Dry season (weeks 27-52):** Crops that are drought-tolerant, such as sorghum, millet, and cassava, are suitable for this period.

**Overall trends:**

* **Groundwater:** Groundwater levels have been declining over the past 10 years.
* **Runoff:** Runoff has been increasing over the past 10 years.
* **Floods:** The frequency and severity of floods have been increasing over the past 10 years.
* **Temperature:** Temperatures have been increasing over the past 10 years.

**Risk management:**

* **Droughts:** Farmers can mitigate the risk of droughts by planting drought-tolerant crops, using irrigation, and implementing water conservation measures.
* **Floods:** Farmers can mitigate the risk of floods by building flood control structures, planting flood-tolerant crops, and avoiding farming in flood-prone areas.
* **Temperature extremes:** Farmers can mitigate the risk of temperature extremes by planting heat-tolerant crops, providing shade for crops, and using irrigation to cool crops.

**Additional insights:**

* The combined data can be used to develop irrigation plans that take into account groundwater availability, runoff, and temperature.
* The data can also be used to develop crop rotation plans that take into account the water and temperature requirements of different crops.</p> */}
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px' }}> <h2>Overall Summary of Agricultural Data</h2> <h3>Seasonality</h3> <ul> <li><strong>Groundwater:</strong> Higher during wet season (weeks 1-26), lower during dry season (weeks 27-52).</li> <li><strong>Runoff:</strong> Highest during wet season, lowest during dry season.</li> <li><strong>Floods:</strong> Most common during wet season, least common during dry season.</li> <li><strong>Temperature:</strong> Highest during summer (weeks 2-12), lowest during winter (weeks 27-52).</li> </ul> <h3>Crop Suitability</h3> <ul> <li><strong>Wet season (weeks 1-26):</strong> Suitable for water-intensive crops like rice, sugarcane, and bananas.</li> <li><strong>Dry season (weeks 27-52):</strong> Suitable for drought-tolerant crops like sorghum, millet, and cassava.</li> </ul> <h3>Overall Trends (Past 10 Years)</h3> <ul> <li><strong>Groundwater:</strong> Declining levels</li> <li><strong>Runoff:</strong> Increasing</li> <li><strong>Floods:</strong> Increasing frequency and severity</li> <li><strong>Temperature:</strong> Rising</li> </ul> <h3>Risk Management</h3> <ul> <li><strong>Droughts:</strong> Plant drought-tolerant crops, use irrigation, implement water conservation measures.</li> <li><strong>Floods:</strong> Build flood control structures, plant flood-tolerant crops, avoid farming in flood-prone areas.</li> <li><strong>Temperature extremes:</strong> Plant heat-tolerant crops, provide shade, use irrigation for cooling.</li> </ul> <h3>Additional Insights</h3> <ul> <li>Use combined data to develop irrigation plans considering groundwater availability, runoff, and temperature.</li> <li>Develop crop rotation plans based on water and temperature requirements of different crops.</li> </ul> <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginTop: '20px' }}> <strong>Navigation Instructions:</strong> <p>Use the <kbd>←</kbd> Left Arrow and <kbd>→</kbd> Right Arrow keys to navigate between detailed graphs.</p> </div> </div>
    </div>
  </div>
};

export default ChartComponent2;