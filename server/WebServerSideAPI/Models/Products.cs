using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebServerSideAPI.Models
{
    public class Products
    {
        [Key, Required]
        public int productID { get; set; }

        [StringLength(40), Required]
        public string productName { get; set; }


        public int supplierId { get; set; }
      
        public int quantityPerUnit { get; set; }

        [Column(TypeName = "numeric")]
        public decimal unitPrice { get; set; }

        public int unitsInStock { get; set; }
        public int unitsOnOrder { get; set; }

        public int reorderLevel { get; set; }

        public bool discontinued { get; set; }

        [StringLength(10000)]
        public string Picture { get; set; }

        [Required]
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }

        public Categories Categories { get; set; }
    }
}
