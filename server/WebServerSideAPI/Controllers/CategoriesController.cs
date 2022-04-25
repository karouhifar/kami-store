using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebServerSideAPI.Models;
using WebServerSideAPI.Repositories;

namespace WebServerSideAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly DataContext db;
        private readonly IJWTManagerRepository jWTManager;
        public CategoriesController(DataContext db, IJWTManagerRepository jWTManager)
        {
            this.db = db;
            this.jWTManager = jWTManager;
        }
        //-----------------------------------------------------------------------------
        //---------------------------  Auth METHODS   ----------------------------------
        //-----------------------------------------------------------------------------
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate(Users usersdata)
        {
            try
            {
                var token = jWTManager.Authenticate(usersdata);
                return Ok(token);
            } catch (Exception o)
            {
                return Unauthorized("There is no user registered to this application");
            }       
        }
            //-----------------------------------------------------------------------------
            //---------------------------  GET METHODS   ----------------------------------
            //-----------------------------------------------------------------------------

            // --- Get all only Categories

            [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(db.Categories.ToList());
        }

        // --- Get all Categories with their products

        [HttpGet]
        [Route("/api/Categories/GetAllCategoriesProduct")]
        public IActionResult GetAllCategoriesProduct()
        {
            var a = db.Categories.ToList();
            var b = db.Products.ToList();

            var query = from c in a
                        join st in b on c.CategoryId equals st.CategoryId into AllData
                        select new
                        {
                            CategoriesName = c.CategoryName,
                            Description = c.Description,
                            Picture = c.Picture,
                            Product =  AllData.Distinct().Select(a => new
                            {
                                productName = a.productName,
                                supplierId = a.supplierId,
                                quantityPerUnit = a.quantityPerUnit,
                                unitPrice = a.unitPrice,
                                unitsInStock = a.unitsInStock,
                                unitsOnOrder = a.unitsOnOrder,
                                reorderLevel = a.reorderLevel,
                                discontinued = a.discontinued,
                            })
                        };


            return Ok(query);
        }

        // --- Get the specific Category

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var Categories = db.Categories.Find(id);
            if (Categories == null)
            {
                return NotFound();
            }

            return Ok(Categories);
        }

        // --- Get the specific Products inside the Category

        [HttpGet]
        [Route("/api/Categories/{id}/Products")]
        public IActionResult GetCategoriesProduct(int id)
        {
            var Product = db.Products.Where(t => t.CategoryId == id).ToList();
            if (Product == null || Product.Count <= 0)
                return NotFound();

            return Ok(Product);
        }

        //-----------------------------------------------------------------------------
        //---------------------------  POST METHODS  ----------------------------------
        //-----------------------------------------------------------------------------

        // --- Post the Category

        [HttpPost]
        public IActionResult Post([FromBody] Categories Categories)
        {
            db.Categories.Add(Categories);
            db.SaveChanges();

            return new ObjectResult($"Category created with ID: {Categories.CategoryId}") { StatusCode = 201 };
        }

        // --- Post the Product

        [HttpPost]
        [Route("/api/Categories/{cid}/PostProduct")]
        public IActionResult PostProduct(int cid, [FromBody] Products product)
        {
            var Category = db.Categories.Find(cid);

            if (Category != null)
            {
                db.Products.Add(product);
                product.CategoryId = Category.CategoryId;
                db.SaveChanges();
                return new ObjectResult($"product created with ID: {product.CategoryId}") { StatusCode = 201 };
            }

            return NotFound();
        }

        //-----------------------------------------------------------------------------
        //---------------------------  PUT METHODS   ----------------------------------
        //-----------------------------------------------------------------------------

        // --- Update the Category

        [HttpPut("{id}")]
        public IActionResult Put(int id, Categories Categories)
        {
            if (id != Categories.CategoryId) return BadRequest();

            db.Entry(Categories).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            try
            {
                db.SaveChanges();

            }
            catch (Exception)
            {
                if (db.Categories.Find(id) == null)
                    return NotFound();
                throw;
            }


            return NoContent();
        }

        //-----------------------------------------------------------------------------
        //---------------------------  DELETE METHODS   ----------------------------------
        //-----------------------------------------------------------------------------

        // --- Delete the Category

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var Category = db.Categories
            .Include(x => x.Products)
            .Where(u => u.CategoryId == id)
            .SingleOrDefault();

            if (Category == null)
            {
                return NotFound();
            }
            db.Categories.Remove(Category);
            db.SaveChanges();
            return Ok(Category);
        }
    }
}
