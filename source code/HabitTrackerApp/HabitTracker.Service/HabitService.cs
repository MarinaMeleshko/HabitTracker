using System;
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

        public async Task UpdateHabits(IEnumerable<Habit> habits)
        {
            var habitsData = habits.Select(h => new Data.Contract.Model.Habit
            {
                Id = h.Id,
                CreationDate = h.CreationDate,
                Duration = h.Duration,
                Progress = h.Progress.ToList(),
                Title = h.Title
            }).ToArray();
            
            foreach (var habit in habitsData)
            {
                RemoveProgressItemsAfterLastTrue(habit.Progress);
            }

            await _habitRepository.UpdateHabits(habitsData);
        }

        private List<bool> RemoveProgressItemsAfterLastTrue(List<bool> progress)
        {
            var indexRemoveStartAt = progress.Count - 1;
            while (indexRemoveStartAt >= 0 && progress[indexRemoveStartAt] == false)
            {
                indexRemoveStartAt--;
            }

            indexRemoveStartAt++;

            progress.RemoveRange(indexRemoveStartAt, progress.Count - indexRemoveStartAt);

            return progress;
        }
    }
}
