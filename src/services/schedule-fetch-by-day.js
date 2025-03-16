
import dayjs from 'dayjs';
import { apiConfig } from './api-config.js';

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição 
    const response = await fetch(`${apiConfig.baseURL}/schedule`);

    // Converte para JSON
    const data = await response.json();
    
    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.error(error);
    alert("não foi possível buscar os agendamentos do dia selecionado.");
  }
}