import s from "./SearchBar.module.css"
import React from "react";
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const searchQuery = event.target.searchQuery.value.trim();
      if (!searchQuery) {
        toast.error('Будь ласка, введіть текст для пошуку зображень!');
        return;
      }
      onSubmit(searchQuery);
    };
  

  return (
    <header>
      <form className={s.form} onSubmit={handleSubmit}>
        <input 
          className={s.input}
          type="text" 
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Пошук зображень та фото"
        />
        <button className={s.btn} type="submit">Шукати</button>
      </form>
    </header>
  );
};

export default SearchBar;
