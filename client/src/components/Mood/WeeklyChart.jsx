import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, CategoryScale, LinearScale, Chart } from "react-chartjs-2";

const MoodStats = () => {
  const [moods, setMoods] = useState([]);

  Chart.register(CategoryScale, LinearScale);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all"); // Replace with your API endpoint

      console.log("Response:", response.data);

      const { moods } = response.data;
      setMoods(moods);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const prepareChartData = () => {
    // Group moods by date
    const groupedMoods = {};
    moods.forEach((mood) => {
      const moodDate = new Date(mood.date).toLocaleDateString();
      if (!groupedMoods[moodDate]) {
        groupedMoods[moodDate] = [];
      }
      groupedMoods[moodDate].push(mood);
    });

    // Extract unique dates and their respective mood counts
    const labels = Object.keys(groupedMoods);
    const moodCounts = labels.map((date) => groupedMoods[date].length);

    const data = {
      labels,
      datasets: [
        {
          label: ["🙁", "😐", "🙂", "😄", "🤗"],
          data: moodCounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return data;
  };

  return (
    <div>
      <h2>Mood Statistics</h2>
      {moods.length > 0 ? (
        <Bar
          data={prepareChartData()}
          options={{
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false,
                // position: "top",
                // align: "center",
                // justify: "center",
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoodStats;
