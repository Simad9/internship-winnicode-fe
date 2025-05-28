// src/routes/NewsRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/news/pages/HomePage';
import NewsDetailPage from '../features/news/pages/NewsDetailPage';
import AnotherNewsPage from '../features/news/pages/AnotherNewsPage';
import SearchNewsPage from '../features/news/pages/SearchNewsPage';
import InternNewsPage from '../features/news/pages/InternNewsPage';

const NewsRoutes = () => (
  <Routes>
    <Route path="" element={<HomePage />} />
    <Route path=":newsId" element={<NewsDetailPage />} />
    <Route path="page" element={<AnotherNewsPage />} />
    <Route path="search" element={<SearchNewsPage />} />
    <Route path="magang/:userId" element={<InternNewsPage />} />
  </Routes>
);

export default NewsRoutes;
