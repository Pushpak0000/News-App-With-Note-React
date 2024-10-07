import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { NewsAppContext } from "./store/news-app-store";
import { Outlet } from "react-router-dom";
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNews(news) {
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_APP_URL}${news}&apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const data = await response.json();
    setArticles(data.articles);
    setLoading(false);
  }

  function handleApiCall() {
    getNews("india");
  }

  return (
    <NewsAppContext.Provider
      value={{
        articles,
        loading,
        handleApiCall,
        getNews,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </NewsAppContext.Provider>
  );
}

export default App;
