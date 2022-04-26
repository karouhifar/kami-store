using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebServerSideAPI.Models
{
    public class UserLogin
    {
        [Required, StringLength(50)]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
