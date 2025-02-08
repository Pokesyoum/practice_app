import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from "./routing";
import reportWebVitals from './reportWebVitals';

// React 18 の新しいレンダリング方法
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// パフォーマンス測定用のコード（そのままでOK）
reportWebVitals();
