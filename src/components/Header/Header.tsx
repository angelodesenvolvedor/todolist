import { StatsCard } from "../StatsCard/StatsCard"
import style from "./header.module.scss"

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <h1>MyTodo</h1>
                    <span>Bem-vindo, Angelo!</span>
                </div>
            </div>
            <div className={style.statsContainer}>
                <StatsCard title="Total de Tarefas" value={5} />
                <StatsCard title="Tarefas Pendentes" value={4} />
                <StatsCard title="Tarefas Concluídas" value={1} />
            </div>
        </header>
    );
};
