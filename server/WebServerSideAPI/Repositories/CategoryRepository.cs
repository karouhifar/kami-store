using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebServerSideAPI.Models;

namespace WebServerSideAPI.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Categories> Create(Categories category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task Delete(int id)
        {
            var ToDelete = await _context.Categories.FindAsync(id);
            _context.Categories.Remove(ToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Categories>> Get()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Categories> Get(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task Update(Categories category)
        {
            _context.Entry(category).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
