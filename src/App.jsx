import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
      </select>
    </div>
  )
}

export default App
