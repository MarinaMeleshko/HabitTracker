using System.Collections.Generic;
using System.Threading.Tasks;
using HabitTracker.Service.Contract.Model;

namespace HabitTracker.Service.Contract.Service
{
    public interface IHabitService
    {
        Task<IEnumerable<Habit>> GetHabitsAsync();

        Task UpdateHabits(IEnumerable<Habit> habits);
    }
}
