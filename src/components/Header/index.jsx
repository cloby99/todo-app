// import todoLogo from '../../assets/todoLogo.png';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo__img}>
        {/* <img src={todoLogo} /> */}
      </div>

      <div  className={styles.newTaskForm}>
      <form onSubmit={handleSubmit} >
        <input required placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
      </div>
    </header>
  )
}