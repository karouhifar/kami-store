using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Linq;
using System.Threading.Tasks;

namespace WebServerSideAPI.Models
{
    public class Categories
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Categories()
        {
            Products = new HashSet<Products>();
          
        }


        [Key, Required]
        public int CategoryId { get; set; }

        [StringLength(15), Required]
        public string CategoryName { get; set; }
        [DataType(DataType.MultilineText), StringLength(10000)]
        public string Description { get; set; }

        [StringLength(10000)]
        public string Picture { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Products> Products { get; set; }

    }
}
