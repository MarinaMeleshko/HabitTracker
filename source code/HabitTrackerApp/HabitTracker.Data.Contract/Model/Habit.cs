using System;
using System.Collections.Generic;

namespace HabitTracker.Data.Contract.Model
{
    public class Habit
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Duration { get; set; }

        public List<bool> Progress { get; set; }

        public DateTime CreationDate { get; set; }
    }
}
