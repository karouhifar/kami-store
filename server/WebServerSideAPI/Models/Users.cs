using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebServerSideAPI.Models
{

    public class Users : UserLogin
    {
        [Key, Required]
        public int userID { get; set; }

        [Required , Compare("Password", ErrorMessage = "password must match together")]
        [NotMapped]
        public string MatchPassword { get; set; }
    }
}
