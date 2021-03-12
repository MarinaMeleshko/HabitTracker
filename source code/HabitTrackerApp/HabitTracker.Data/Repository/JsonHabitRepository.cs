using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HabitTracker.Data.Contract.Model;
using HabitTracker.Data.Contract.Repository;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace HabitTracker.Data.Repository
{
    public class JsonHabitRepository : IHabitRepository
    {
        private readonly string _jsonFilePath;

        public JsonHabitRepository(string jsonFilePath)
        {
            _jsonFilePath = jsonFilePath;
        }

        public async Task<IEnumerable<Habit>> GetHabitsAsync()
        {
            using var streamReader = File.OpenText(_jsonFilePath);
            using var jsonTextReader = new JsonTextReader(streamReader);
            var jArray = (JArray) await JToken.ReadFromAsync(jsonTextReader);

            if (jArray == null)
            {
                throw new JsonException("An error occurred during json deserializing. Json file can be damaged.");
            }

            var habits = jArray.ToObject<IEnumerable<Habit>>();
            return habits;
        }

        public async Task<Habit> GetHabitAsync(int id)
        {
            var habits = await GetHabitsAsync();
            var habit = habits.FirstOrDefault(h => h.Id == id);

            return habit;
        }

        public async Task<Habit> GetHabitAsync(string title)
        {
            var habits = await GetHabitsAsync();
            var habit = habits.FirstOrDefault(h => h.Title.Trim() == title.Trim());

            return habit;
        }

        public async Task UpdateHabits(IEnumerable<Habit> habits)
        {
            await using var streamWriter = File.CreateText(_jsonFilePath);

            var jsonSerializer = new JsonSerializer();
            jsonSerializer.Serialize(streamWriter, habits);
        }
    }
}
