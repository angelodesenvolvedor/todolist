import React, { useState } from "react";
import style from "./style.module.scss";

interface Task {
    title: string;
    completed: boolean;
}

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (event: React.FormEvent) => {
        event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário
        if (taskTitle.trim()) { // Verifica se o título da tarefa não está vazio
            const newTask: Task = { title: taskTitle, completed: false };
            setTasks([...tasks, newTask]); // Adiciona a nova tarefa à lista de tarefas
            setTaskTitle(""); // Limpa o campo de entrada após adicionar a tarefa
        }
    };

    const toggleTaskCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <section className={style.container}>
            <form onSubmit={handleAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar Tarefas</label>
                    <input 
                        value={taskTitle} 
                        onChange={(event) => setTaskTitle(event.target.value)} 
                        type="text" 
                        id="task-title" 
                        placeholder="Título da Tarefa" 
                    />
                </div>
                <button type="submit">Adicionar tarefa</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? style.completed : ""}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTaskCompletion(index)} 
                        />
                        {task.title}
                    </li>
                ))}
            </ul>
        </section>
    );
};
