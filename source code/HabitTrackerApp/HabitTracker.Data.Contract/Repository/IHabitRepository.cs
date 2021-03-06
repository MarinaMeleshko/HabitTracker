using System.Collections.Generic;
using System.Threading.Tasks;
using HabitTracker.Data.Contract.Model;

namespace HabitTracker.Data.Contract.Repository
{
    public interface IHabitRepository
    {
        Task<IEnumerable<Habit>> GetHabitsAsync();
            
        Task<Habit> GetHabitAsync(int id);

        Task<Habit> GetHabitAsync(string title);
    }
}
