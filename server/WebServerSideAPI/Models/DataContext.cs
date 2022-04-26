using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServerSideAPI.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
         
        }
        public DbSet<Categories> Categories { get; set; }

        public DbSet<Products> Products { get; set; }

        public DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Categories>()
            .HasMany<Products>(p => p.Products)
            .WithOne(c => c.Categories)
            .HasForeignKey(s => s.CategoryId)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Users>().Ignore(m => m.MatchPassword);
            modelBuilder.Entity<Users>().HasIndex(x => x.Name).IsUnique();

            modelBuilder.Entity<Categories>(entity =>
            {
                entity.HasData(new Categories()
                {
                    CategoryId = 1,
                    CategoryName = "Electronics",
                    Description = "The field of electronics is a branch of physics and electrical engineering that deals with the emission, behavior and effects of electrons using electronic devices",
                    Picture = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Electronic_circuit.jpg",
                });

            });

            modelBuilder.Entity<Products>(entity =>
            {
            entity.HasData(
                new Products()
                {
                    productID = 1,
                    productName = "Hard Drive",
                    supplierId = 235,
                    CategoryId = 1,
                    quantityPerUnit = 43,
                    unitPrice = 43.6M,
                    unitsInStock = 7,
                    unitsOnOrder = 3,
                    reorderLevel = 5,
                    discontinued = true,
                    Picture = "https://m.media-amazon.com/images/I/71nK57McdyL._AC_SX679_.jpg"
                },
               new Products()
               {
                   productID = 2,
                   productName = "Iphone",
                   supplierId = 532,
                   CategoryId = 1,
                   quantityPerUnit = 45,
                   unitPrice = 53.6M,
                   unitsInStock = 2,
                   unitsOnOrder = 6,
                   reorderLevel = 2,
                   discontinued = false,
                   Picture = "https://www.cnet.com/a/img/resize/6332121a72aa55809d320f7315d15f9983270b63/2021/09/21/643c0f64-e568-4fbc-94be-d6dde9acd27c/iphone-13-pro-max-cnet-review-2021-128.jpg?auto=webp&width=940"
               });
            });
        }

     
    }
}
