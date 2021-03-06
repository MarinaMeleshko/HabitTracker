using System;
using System.Collections.Generic;

namespace HabitTracker.Service.Contract.Model
{
    public record Habit(int Id, string Title, IEnumerable<bool> Progress, int Duration, DateTime CreationDate);
}
