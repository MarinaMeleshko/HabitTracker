using System.Collections.Generic;
using System.Threading.Tasks;
using HabitTracker.Service.Contract.Model;
using HabitTracker.Service.Contract.Service;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Client.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitController : ControllerBase
    {
        private readonly IHabitService _habitService;

        public HabitController(IHabitService habitService)
        {
            _habitService = habitService;
        }

        [HttpGet]
        [Route("habits")]
        public async Task<IEnumerable<Habit>> GetAsync()
        {
            return await _habitService.GetHabitsAsync();
        }

        [HttpPost]
        [Route("updatehabits")]
        public async Task UpdateHabits(IEnumerable<Habit> habits)
        {
            await _habitService.UpdateHabits(habits);
        }
    }
}
