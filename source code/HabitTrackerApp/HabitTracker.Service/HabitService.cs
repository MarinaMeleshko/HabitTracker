using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HabitTracker.Data.Contract.Repository;
using HabitTracker.Service.Contract.Model;
using HabitTracker.Service.Contract.Service;

namespace HabitTracker.Service
{
    public class HabitService: IHabitService
    {
        private readonly IHabitRepository _habitRepository;

        public HabitService(IHabitRepository habitRepository)
        {
            _habitRepository = habitRepository;
        }
        public async Task<IEnumerable<Habit>> GetHabitsAsync()
        {
            var habits = await _habitRepository.GetHabitsAsync().ConfigureAwait(false);
            var habitRecords = habits.Select(h => new Habit(h.Id, h.Title, h.Progress, h.Duration, h.CreationDate));

            return habitRecords;
        }
    }
}
