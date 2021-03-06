using HabitTracker.Data.Contract.Repository;
using HabitTracker.Data.Repository;
using HabitTracker.Service;
using HabitTracker.Service.Contract.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HabitTracker.Client.ServiceCollectionExtension
{
    public static class ConfigureDependencies
    {
        private const string DataFilePathConfigKey = "Data:FilePath";
        public static void AddRepositories(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.AddTransient<IHabitRepository, JsonHabitRepository>(_ =>
                new JsonHabitRepository(configuration.GetValue<string>(DataFilePathConfigKey)));
        }

        public static void AddServices (this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IHabitService, HabitService>();
        }
    }
}
