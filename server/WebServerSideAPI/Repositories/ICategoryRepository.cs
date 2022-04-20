using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebServerSideAPI.Models;

namespace WebServerSideAPI.Repositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Categories>> Get();
        Task<Categories> Get(int id);
        Task<Categories> Create(Categories category);
        Task Update(Categories category);
        Task Delete(int id);
    }
}
